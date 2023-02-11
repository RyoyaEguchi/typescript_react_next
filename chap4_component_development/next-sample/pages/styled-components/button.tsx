import { NextPage } from "next"
import styled from "styled-components"

type ButtonProps = {
  color: string
  backgroundColor: string
}

const StyledButton = styled.button<ButtonProps>`
  /* color, background, border-colorはpropsから渡す */
  color: ${(props) => props.color};
  background: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.color};

  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`

const Button: NextPage = () => {
  return (
    <div>
      <StyledButton backgroundColor="transparent" color="#FF0000">Hello</StyledButton>
      <StyledButton backgroundColor="#1E90FF" color="white">Hello</StyledButton>
    </div>
  )
}

export default Button