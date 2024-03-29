import styled from 'styled-components'

interface Props {
  isOpenSidebar: boolean
}

export const Container = styled.div<Props>`
  width: 100%;

  .card {
    width: 100%;
    border-radius: 7px;
    max-width: 1028px;
    height: 100%;
    box-shadow: 0px 8px 16px 4px #9e9e9e;
    margin: 15px auto 0 auto;
    padding: 25px;

    label {
      margin-top: 0.5rem;
    }

    .stars {
      color: rgb(167, 40, 69);
      font-weight: 700;
      margin-left: 2px;
    }
  }

  .row {
    height: 100%;
    align-items: center;
  }

  .btn-primary {
    width: 100%;
  }

  .error {
    width: 100%;
    color: red;
    background: linear-gradient(
      to right,
      #ffffff 50%,
      rgba(241, 224, 190, 0.507)
    );
  }

  form {
    width: 100%;
  }

  .sendButton {
    button {
      background-color: #c93b59;
      margin-top: 22px;
      border-radius: 10px;
      width: 30%;
      height: 45px;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    .card {
      height: 662px;
    }
  }
`
