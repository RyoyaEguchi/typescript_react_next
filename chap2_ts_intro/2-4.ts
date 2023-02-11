/**
 * Enum型
 */
// 自動的に0から値が設定される
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let direction: Direction = Direction.Left
console.log(direction) // 2

// 任意の値を設定する
enum Direction2 {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  RIGHT = 'RIGHT',
}
const value = 'DOWN'
const enumValue = value as unknown as Direction

if (enumValue === Direction.Down) {
  console.log('Down is selected')
}

/**
 * ジェネリック型
 */
class Queue<T> {
  private array: T[] = []

  push(item: T) {
    this.array.push(item)
  }

  pop(): T | undefined {
    return this.array.shift()
  }
}

const queue = new Queue<number>()
queue.push(111)
queue.push(112)
// queue.push('hoge') // 型が違うためエラー

/**
 * Union型とIntersection型
 */
// Union型
function printId(id: number | string) {
  console.log(id)
}
printId('12')
printId(12)

type Id = number | string
function tPrintId(id: Id) {
  console.log(id)
}

// Union型は型エイリアス同士にも使える
type Identity = {
  id: number | string
  name: string
}
type Contact = {
  name: string
  email: string
  phone: string
}
// IdentityかContactの型を受け付ける
type IdentityOrContact = Identity | Contact
let id: IdentityOrContact = {
  id: 100,
  name: 'test'
}
let contact: IdentityOrContact = {
  name: 'test',
  email: 'email',
  phone: 'phone'
}


// Intersection型は複数の型をマージした型を生成する
type Employee = Identity & Contact
const employee: Employee = {
  id: 100,
  name: 'test',
  email: 'email',
  phone: 'phone'
}


/**
 * リテラル型
 * 
 * 決まった値しか入らない型
 */
let postStatus: 'draft' | 'published' | 'deleted'
postStatus = 'draft'
// postStatus = 'drafts' // エラー


/**
 * never型
 * 
 * 決して発生しない値の種類を指定する。
 * 常に例外を発生させる関数などで決して値が返されることのない戻り値の方をneverとして定義する 
 */
function error(message: string): never {
  throw new Error(message)
}

function foo(x: string | number | number[]): boolean {
  if (typeof x === 'string') {
    return true
  } else if (typeof x === 'number') {
    return false
  }

  return error('Never happens')
}

// より有効なnever型の使い方
enum PageType {
  ViewProfile,
  EditProfile,
  ChangePassword
}

const getTitleText = (type: PageType) => {
  switch (type) {
    case PageType.ViewProfile:
      return 'Setting'
    case PageType.EditProfile:
      return 'Edit Profile'
    case PageType.ChangePassword:
      return 'Change Password'
    default:
      // 決して怒らないことをコンパイラに伝えるnever型に代入する
      // これにより、将来PageTypeのenum型に対数が新規で追加された際に
      // コンパイル時エラーが発生するためバグを未然に防ぐことができる
      const wrongType: never = type
      throw new Error(`${wrongType} is not in PageType`)
  }
}