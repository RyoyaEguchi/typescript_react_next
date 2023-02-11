import { NextPage } from "next";
import styled from "styled-components";

const StyledBadge = styled.span`
  padding: 8px 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background: red;
  border-radius: 16px;
`

const Badge: NextPage = () => {
  return <StyledBadge>Hello World!</StyledBadge>
}

export default Badge