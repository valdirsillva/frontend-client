import styled from 'styled-components'

export const Wrapper = styled.main`
  width: 75%
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Loader = styled.div`
  width: 16px;
  height: 16px;
  position: relative;
  border-radius: 50%;
  color: #fff;
  background: currentColor;
  box-shadow: 32px 0 , -32px 0 ,  64px 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    background:#FF3D00;
    animation: move 3s linear infinite alternate;
  }

  @keyframes move {
    0% , 5%{
      left: -32px;
      width: 16px;
    }
    15% , 20%{
      left: -32px;
      width: 48px;
    }
    30% , 35%{
      left: 0px;
      width: 16px;
    }
    45% , 50%{
      left: 0px;
      width: 48px;
    }
    60% , 65%{
      left: 32px;
      width: 16px;
    }

    75% , 80% {
      left: 32px;
      width: 48px;
    }
    95%, 100% {
      left: 64px;
      width: 16px;
    }
}
`
