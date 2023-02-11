import { ComponentMeta } from "@storybook/react";
import { StyledButton } from "../components/StyledButton";

// ファイル内のStoryの設定（メタデータオブジェクト）
export default {
  // グループ名
  title: 'StyledButton',
  // 使用するコンポーネント
  component: StyledButton,
  // onClickが呼ばれたときにclickedというアクションを出力する
  argTypes: { onClick: { action: 'clicked' } }
} as ComponentMeta<typeof StyledButton>

export const Primary = (props) => {
  return (
    <StyledButton {...props} variant="primary">
      Primary
    </StyledButton>
  )
}

export const Success = (props) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  )
}

export const Transparent = (props) => {
  return (
    <StyledButton {...props} variant="transparent">
      Transparent
    </StyledButton>
  )
}