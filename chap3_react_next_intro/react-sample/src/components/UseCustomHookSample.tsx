import React, { useCallback, useDebugValue, useState } from "react"

// input向けにコールバックと現在の入力内容をまとめたフック
const useInput = () => {
  const [state, setState] = useState('')
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }, [])

  // デバッグ用に値を出力
  // 値は開発者ツールのComponentsタブに表示される
  useDebugValue(`input ${state}`)

  // 現在の　入力内容とコールバック関数だけ返す
  return [state, onChange] as const
} 

export const UseCustomHookSample = () => {
  const [text, onChangeText] = useInput()
  return (
    <div>
      <input type="text" value={text} onChange={onChangeText} />
      <p>Input: {text}</p>
    </div>
  )
}