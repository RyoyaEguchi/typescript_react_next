import React, { useCallback, useState } from "react"

type ButtonProps = {
  onClick: () => void
}

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props

  console.log('Decrementが再描画')

  return <button onClick={onClick}>Decrement</button>
}

const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('Incremantが再描画')

  return <button onClick={onClick}>Increment</button>
})

const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('Doubleが再描画')

  return <button onClick={onClick}>Double</button>
})

export const Parent = () => {
  const [count, setCount] = useState(0)

  const decretemet = () => {
    setCount((c) => c - 1)
  }
  const incretemet = () => {
    setCount((c) => c + 1)
  }
  const double = useCallback(() => {
    setCount((c) => c * 2)
  }, [])

  return (
    <div>
      <p>Count: {count}</p>
      <DecrementButton onClick={decretemet} />
      <IncrementButton onClick={incretemet} />
      <DoubleButton onClick={double} />
    </div>
  )
}