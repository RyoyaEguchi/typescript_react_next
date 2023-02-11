import { memo, useState } from "react"

type FizzProps = {
  isFizz: boolean
}

const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log(`Fizzが再描画されました, isFizz = ${isFizz}`)
  return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
  isBuzz: boolean
  onClick?: () => void
}

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz } = props
  console.log(`Buzzが再描画されました, isBuzz = ${isBuzz}`)
  return (
    <span>
      {isBuzz ? 'Buss' : ''}
    </span>
  )
})

// const Buzz = memo<BuzzProps>((props) => {
//   const { isBuzz, onClick } = props
//   console.log(`Buzzが再描画されました, isBuzz = ${isBuzz}`)
//   return (
//     <span onClick={onClick}>
//       {isBuzz ? 'Buss' : ''}
//     </span>
//   )
// })

export const Parent = () => {
  const [count, setCount] = useState(1)
  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0
  const onBuzzClick = () => {
    console.log(`クリックされました`)
  }

  console.log(`Parentが再描画されました, count = ${count}`)
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{`現在のカウント: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        {/*
        メモ化したコンポーネントに関数やオブジェクト・配列を渡すと、親コンポーネントの再描画時に同時に再描画されるようになる
        再描画のたびに新しく作られた関数が子コンポーネントに渡されるためである
        useCallbackやuseMemoのフックを用いることで、関数や値をメモ化できる
         */}
        <Buzz isBuzz={isBuzz} /** ここのコメントアウトを外すと、コンポーネントの再描画が発生する　　onClick={onBuzzClick} */ />
      </p>
    </div>
  )
}