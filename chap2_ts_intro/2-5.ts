/**
 * Optional Chaining
 */
interface User25 {
  name: string
  social?: {
    facebook: boolean
    twitter: boolean
  }
}
let user25: User25

user25 = { name: 'Ryo', social: { facebook: true, twitter: true } }
console.log(user25.social?.facebook)

user25 = { name: 'Ryo' }
console.log(user25.social?.facebook)


/**
 * Non-null Assertion Operator
 */
function processUser25(user?: User25) {
  let s = user!.name
}


/**
 * 型ガード
 */
function addOne25(value: number | string) {
  if (typeof value === 'string') {
    return Number(value) + 1
  }
  return value + 1
}
console.log(addOne25(10))   // 11
console.log(addOne25('20')) // 21


/**
 * keyofオペレーター
 */
interface User25_2 {
  name: string
  age: number
  email: string
}
type UserKey25_2 = keyof User25_2 // name | age | email
const userKey25_2_1: UserKey25_2 = 'name' // OK
// const userKey25_2_2: UserKey25_2 = 'phone' // 型のキーに存在しないためエラー

// 第一引数のオブジェクトの型のプロパティ名のUnion型と、第二引数の値のリテラル型が一致する必要がある
function getProperty25<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}
const user25_2_3: User25_2 = {
  name: 'Ryo',
  age: 28,
  email: 'email'
}
const userName = getProperty25(user25_2_3, 'name')


/**
 * インデックス型
 */
// プロパティ名を任意のnumberとして扱う型の定義
type supportVersions25 = {
  [env: number]: boolean
}
let versions25: supportVersions25 = {
  102: false,
  103: false,
  104: true,
  // 'v105': true, // Error
}


/**
 * readonly
 */
type Human25 = {
  readonly name: string
  readonly gender: string
}
let human25: Human25 = { name: 'Ryo', gender: 'Male' }

// Readonlyというジェネリック型も存在する
type Human25_2 = {
  name: string
  gender: string
}
type Human25_2Readonly = Readonly<Human25_2>
let human25_2: Human25_2 = { name: 'Ryo', gender: 'Male' }
let human25_2readonly: Human25_2Readonly = { name: 'Ryo', gender: 'Male' }
human25_2.gender = 'gender' // OK
// human25_2readonly.gender = 'gender' // Error

// constとの違いとしては、
// constは変数の代入に対して行う宣言で、
// readonlyはオブジェクトやクラスのプロパティに対して行う宣言


/**
 * unknown
 */
// anyと同じくどのような値も代入できる型
// しかし、typeofやinstanceofなどを利用して型安全な状況を作ってからアクセスできる
const x25: unknown = 123
const y25: unknown = 'Hello'

// 型安全でないためError
// console.log(x25.toFixed(1))
// console.log(y25.toLowerCase())

// 型安全な状況を作る
if (typeof x25 === 'number') {
  console.log(x25.toFixed(1))
}
if (typeof y25 === 'string') {
  console.log(y25.toLowerCase())
}


/**
 * 非同期のAsync/Await
 */
function fetchFromServer25(id: string): Promise<{success: boolean}> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({success: true})
    }, 100)
  })
}

async function asyncFunc25(): Promise<string> {
  //  Promiseな値をawaitすると中身が取り出せる（ように見える）
  const result = await fetchFromServer25('111')
  return `result: ${result}`
}

(async () => {
  const result = await asyncFunc25()
  console.log(result)
})()

// Promiseとして扱う際は下記のように記述する
asyncFunc25().then(result => console.log(result))