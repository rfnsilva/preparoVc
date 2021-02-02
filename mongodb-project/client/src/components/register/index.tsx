import React, { useContext, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from '@unform/web'
import { SubmitHandler, FormHandles } from '@unform/core'
import * as Yup from 'yup'

import AuthContext from '../../contexts/appContext'

import Input from '../input'

import { Container } from './styles'

interface IData {
  email: string
  password: string
}

interface IErrors {
  [index: string]: string
}

const register: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { signUp } = useContext(AuthContext)

  const history = useHistory()

  // subimit form
  const handleSubmit: SubmitHandler<IData> = async data => {
    try {
      if (formRef.current) {
        formRef.current.setErrors({})
      }

      const schema = Yup.object().shape({
        email: Yup.string().email().required('email é obrigatorio !'),
        password: Yup.string().min(6).required('minimo de 6 digitos !')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      // Validation passed
      const response = await signUp(data.email, data.password)

      if (response !== undefined) {
        // redirecionar
        return history.push('/')
      } else {
        alert('erro ao cadastrar')
      }
    } catch (err) {
      const validationErrors: IErrors = {}

      if (err instanceof Yup.ValidationError && formRef.current) {
        err.inner.forEach(error => {
          if (error.path !== undefined) {
            validationErrors[error.path] = error.message
          }
        })

        formRef.current.setErrors(validationErrors)
      }
    }
  }

  const navigate = (url: string) => {
    // redirecionar
    return history.push(url)
  }

  return (
    <Container>
      <div className="container">
        <div className="card card-1">
          <div id="demo" className="carousel" data-ride="carousel">
            <h2>Registrar</h2>
            <div>
              <div>
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form__group field">
                      <Input placehoder="digite seu email" name="email" />
                    </div>

                    <div className="form__group field">
                      <Input
                        name="password"
                        placehoder="digite sua senha"
                        type="password"
                      />
                    </div>

                    <div className="css-img-button">
                      <div>
                        <button type="submit" className="register-btn">
                          Registrar
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>

        <div className="nav-link">
          <a onClick={() => navigate('/login')}>login</a>
        </div>
      </div>
    </Container>
  )
}

export default register
