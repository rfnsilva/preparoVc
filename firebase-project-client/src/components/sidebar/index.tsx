import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaHome, FaMapMarkerAlt, FaFileAlt } from 'react-icons/fa'

import { Container } from './styles'

interface Props {
  isOpenSidebar: boolean
}

const sidebar: React.FC<Props> = ({ isOpenSidebar }) => {
  const history = useHistory()

  const navigate = (url: string) => {
    // redirecionar
    return history.push(url)
  }

  return (
    <Container isOpenSidebar={isOpenSidebar}>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
        id="accordionSidebar"
      >
        <li className="nav-item active">
          <a className="nav-link" onClick={() => navigate('/')}>
            <FaHome />
            <span>Home</span>
          </a>
        </li>

        <hr className="sidebar-divider" />
        <li className="nav-item">
          <a className="nav-link" onClick={() => navigate('/perfil/dados')}>
            <FaFileAlt />
            <span>
              &nbsp;&nbsp;dados <br /> básicos
            </span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            onClick={() => navigate('/perfil/localization')}
          >
            <FaMapMarkerAlt />
            <span>local</span>
          </a>
        </li>
      </ul>
    </Container>
  )
}

export default sidebar
