import { useEffect, useLayoutEffect, useState } from "react"

const UPDATE_CYCLE = 1000

const KEY_LOCALE = 'KEY_LOCALE'

enum Locale  {
  US = 'en-US',
  JP = 'ja-JP'
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US
    case Locale.JP:
      return Locale.JP
    default:
      return Locale.US
  }
}

export const Clock = () => {
  const savedLocale = localStorage.getItem(KEY_LOCALE)
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(savedLocale !== null ? getLocaleFromString(savedLocale) : Locale.US)

  // タイマーをセットするための副作用
  useEffect(() => {
    // タイマーのセット
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    // クリーンアップ関数を渡し、アンマウント時にタイマーを解除する
    return () => {
      clearInterval(timer)
    }
  }, [])

  // localstorageから値を読み込むための副作用
  useLayoutEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])
  // useEffect(() => {
  //   const savedLocale = localStorage.getItem(KEY_LOCALE)
  //   if (savedLocale !== null) {
  //     setLocale(getLocaleFromString(savedLocale))
  //   }
  // }, [])

  // localeが変化したときに、localstorageに値を保存するための副作用
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
  }, [locale])

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  )
}


