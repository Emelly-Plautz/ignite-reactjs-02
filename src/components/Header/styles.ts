import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  aligin-items: center;
  justify-content: space-between;

  nav {
    display: felx;
    gap: 0.5rem; //espaço entre cada item

    a {
      width: 3rem;
      height: 3rem;

      display: felx;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid trasparente;
      border-bottom: 3px solid trasparente;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`
