import { NextPage } from "next";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string
  children: React.ReactNode
}

// Next.jsのリンクにスタイルを適用するためのヘルパーコンポーネント
// このコンポーネントをstyled-componentで使用すると、
// 定義したスタイルに対応するclassNameがpropsとして渡される
// このclassNameをa要素に渡す
const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props
  return (
    <Link {...rest} className={className}>
      {children}
    </Link>
  )
}

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
`

const Page: NextPage = () => {
  return (
    <div>
      <StyledLink href="/">Go to Index</StyledLink>
    </div>
  )
}

export default Page