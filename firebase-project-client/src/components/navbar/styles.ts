import styled from 'styled-components'
// import { Link } from 'react-scroll'
interface Props {
  scrollNav: boolean
}

export const Container = styled.nav<Props>`
  background-color: #fff;
  height: ${props => (props.scrollNav ? '60px' : '80px')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 8px 16px -5px #9e9e9e;
  button svg {
    width: 25px;
    height: 30px;
  }
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  @media (max-width: 769px) {
    justify-content: start;
  }
`

/* transformar isso em um link */
export const Logo = styled.div`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;

  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  .nav-link:after {
    content: none;
  }

  .nav-link {
    color: #d1d3e2;
    height: 4.375rem;
    display: flex;
    align-items: center;
    padding: 0 0.75rem;
    position: relative;
  }

  li {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }

  .img-user {
    margin-left: 40px !important;
  }

  .nav-link:after {
    content: none;
  }

  @media (min-width: 576px) {
    .dropdown {
      position: relative;
    }
  }

  @media (max-width: 768px) {
    .dropdown-toggle {
      display: none;
    }
  }

  @media (min-width: 576px) {
    .dropdown {
      position: relative;
    }
  }
`

export const NavItem = styled.li`
  height: 80px;

  @media (max-width: 768px) {
    display: none;
  }
`
/* transformar isso em um link */
export const NavLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none !important;
  padding: 0 1rem;
  height: 100%;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #eb533f;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled.div`
  border-radius: 50px;
  background: #eb533f;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #552123;
    color: #010606;
  }
`
