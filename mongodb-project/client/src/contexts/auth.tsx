import React, { createContext, useState, useEffect } from 'react'

import Api from '../config/api'
import { storage } from '../config/firebase'

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
    const response = await Api.post('/createUser', {
      email: email,
      password: password
    })

    if (response.data) {
      setUser(response.data.user)
      setToken(response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('token', JSON.stringify(response.data.token))

      return response.data.user
    }

    return undefined
  }

  async function signIn(
    email: string,
    password: string
  ): Promise<IUser | undefined> {
    const response = await Api.post('/session', {
      email: email,
      password: password
    })

    if (
      response.data.message !== 'error user not found' &&
      response.data.message !== 'error password incorrect'
    ) {
      setUser(response.data.user)
      setToken(response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('token', JSON.stringify(response.data.token))

      return response.data.user
    }

    return undefined
  }

  async function signOut() {
    localStorage.clear()
  }

  async function updateEmail(email: string, id: string) {
    const response = await Api.put(`/updateUser/${id}`, email, {
      headers: { Authorization: `bearer ${token}` }
    })

    setUser(response.data)
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  async function updateUser(user: IUser, id: string) {
    // update no mongodb
    const response = await Api.put(`/updateUser/${id}`, user, {
      headers: { Authorization: `bearer ${token}` }
    })

    setUser(response.data)
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  async function uploadImage(file: File, id: string) {
    const uploadTask = storage.ref(`/images/${file.name}`).put(file)

    uploadTask.on('state_changed', console.log, console.error, () => {
      storage
        .ref('images')
        .child(file.name)
        .getDownloadURL()
        .then(async (url: string) => {
          await Api.put(
            `/updateUser/${id}`,
            { image: url },
            {
              headers: { Authorization: `bearer ${token}` }
            }
          )

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
    // update no mongodb
    const response = await Api.put(
      `/updateUser/${id}`,
      { address: address },
      {
        headers: { Authorization: `bearer ${token}` }
      }
    )

    setUser(response.data)
    localStorage.setItem('user', JSON.stringify(response.data))

    // setUser({
    //   ...user,
    //   address: address
    // })

    // const userLocal = JSON.parse(localStorage.getItem('user') || '{}')
    // userLocal.address = address
    // localStorage.setItem('user', JSON.stringify(userLocal))
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        signed: !!user,
        signUp,
        signIn,
        updateUser,
        updateEmail,
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
