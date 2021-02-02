import styled from 'styled-components'

interface Props {
  isOpenSidebar: boolean
}

export const Container = styled.div<Props>`
  width: 100%;

  .card {
    width: 100%;
    border-radius: 7px;
    max-width: 1034px;
    height: 100%;
    box-shadow: 0px 8px 16px 4px #9e9e9e;
    margin-top: 15px;
    padding: 25px;

    .stars {
      color: #c93b59;
      font-weight: 700;
      margin-left: 2px;
    }

    ul {
      list-style-type: none;
      margin-left: 15px;
    }
  }

  .row {
    height: 100%;
    align-items: center;
  }
`
