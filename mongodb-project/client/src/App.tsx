import React from 'react'
import Routes from './routes/index'

import { AuthProvider } from './contexts/appContext'

import GlobalStyles from './styles/global'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <GlobalStyles />
    </>
  )
}
export default App
