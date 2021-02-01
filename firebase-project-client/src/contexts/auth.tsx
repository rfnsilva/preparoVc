import React, { createContext, useState, useEffect } from 'react'

import { auth, db, storage } from '../config/firebase'

interface IAddress {
  cep?: string
  city?: string
  street?: string
  number?: string
  complement?: string
  state?: string
  neighborhood?: string
}

interface IUser {
  id?: string
  email?: string | null | undefined
  name?: string
  surname?: string
  image?: string
  phone?: string
  github?: string
  linkedin?: string
  behance?: string
  address?: IAddress
}

interface AuthContextData {
  signed: boolean
  token: string | undefined
  user: IUser
  signIn(
    email: string | undefined,
    password: string | undefined
  ): Promise<IUser | undefined>
  signUp(
    email: string | undefined,
    password: string | undefined
  ): Promise<IUser | undefined>
  updateEmail(email: string, id: string): Promise<void>
  updateUser(user: IUser, id: string): Promise<void>
  signOut(): Promise<void>
  uploadImage(file: File, id: string): Promise<void>
  updateLocalization(address: IAddress, id: string): Promise<void>
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser>({ email: '' })
  const [token, setToken] = useState<string | undefined>('')

  useEffect(() => {
    async function loadStorageData() {
      const userLocal = JSON.parse(localStorage.getItem('user') || '{}')
      const tokenLocal = JSON.parse(localStorage.getItem('token') || '{}')

      setUser(userLocal)
      setToken(tokenLocal)
    }

    loadStorageData()
  }, [])

  async function signUp(
    email: string,
    password: string
  ): Promise<IUser | undefined> {
    if (email === undefined || password === undefined) {
      return undefined
    }

    const { user } = await auth.createUserWithEmailAndPassword(email, password)

    if (user) {
      const tokenUser = await user?.getIdToken()

      const userData: IUser = {
        email: user?.email
      }

      // salvar no firestore
      const { id } = await db.collection('user').add(userData)
      userData.id = id

      setUser(userData)
      setToken(tokenUser)
      localStorage.setItem('user', JSON.stringify(userData))
      localStorage.setItem('token', JSON.stringify(tokenUser))

      return userData
    }

    return undefined
  }

  async function signIn(
    email: string,
    password: string
  ): Promise<IUser | undefined> {
    if (email === undefined || password === undefined) {
      return undefined
    }

    const { user } = await auth.signInWithEmailAndPassword(email, password)

    if (user) {
      const tokenUser = await user?.getIdToken()

      // pega no firestore
      const { docs } = await db
        .collection('user')
        .where('email', '==', user.email)
        .limit(1)
        .get()

      const userDb = docs[0].data()
      userDb.id = docs[0].id

      setUser(userDb)
      setToken(tokenUser)
      localStorage.setItem('user', JSON.stringify(userDb))
      localStorage.setItem('token', JSON.stringify(tokenUser))

      return userDb
    }

    return undefined
  }

  async function signOut() {
    await auth.signOut()
    localStorage.clear()
  }

  async function updateEmail(email: string, id: string) {
    const userCurrent = auth.currentUser

    userCurrent?.updateEmail(email)

    await db.collection('user').doc(id).update({
      email: email
    })

    // pega no firestore
    const { docs } = await db
      .collection('user')
      .where('email', '==', email)
      .limit(1)
      .get()

    const userDb = docs[0].data()
    userDb.id = docs[0].id

    setUser(userDb)
    localStorage.setItem('user', JSON.stringify(userDb))
  }

  async function updateUser(user: IUser, id: string) {
    const { behance, github, linkedin, name, phone, surname } = user
    const userLocal = JSON.parse(localStorage.getItem('user') || '{}')

    // update no firestore
    await db.collection('user').doc(id).update({
      behance: behance,
      email: userLocal.email,
      github: github,
      linkedin: linkedin,
      name: name,
      surname: surname,
      phone: phone
    })

    // pega no firestore
    const { docs } = await db
      .collection('user')
      .where('email', '==', userLocal.email)
      .limit(1)
      .get()

    const userDb = docs[0].data()
    userDb.id = docs[0].id

    setUser(userDb)
    localStorage.setItem('user', JSON.stringify(userDb))
  }

  async function uploadImage(file: File, id: string) {
    const uploadTask = storage.ref(`/images/${file.name}`).put(file)

    uploadTask.on('state_changed', console.log, console.error, () => {
      storage
        .ref('images')
        .child(file.name)
        .getDownloadURL()
        .then(async (url: string) => {
          await db.collection('user').doc(id).update({
            image: url
          })

          setUser({
            ...user,
            image: url
          })

          const userLocal = JSON.parse(localStorage.getItem('user') || '{}')
          userLocal.image = url
          localStorage.setItem('user', JSON.stringify(userLocal))
        })
    })
  }

  async function updateLocalization(address: IAddress, id: string) {
    await db.collection('user').doc(id).update({
      address: address
    })

    setUser({
      ...user,
      address: address
    })

    const userLocal = JSON.parse(localStorage.getItem('user') || '{}')
    userLocal.address = address
    localStorage.setItem('user', JSON.stringify(userLocal))
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        signed: !!user,
        signUp,
        signIn,
        updateEmail,
        updateUser,
        updateLocalization,
        uploadImage,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
