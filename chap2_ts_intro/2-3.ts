/**
 * 型推論
 */
// 省略

/**
 * 型アサーション
 *
 * 型アサーションが認められるのは、多少となる方に対し、
 * ・より具体的になる
 * ・より汎化される
 * ケースである。複雑なアサーションを行いたい場合にうまくいかないことがあるので、そのときはまずanyに変換する
 * ex. const result = (response as any) as  User
 */
const myCanvas = document.getElementById('canvas') as HTMLCanvasElement

/**
 * 型エイリアス
 */
type Point = {
  x: number
  y: number
}

type PrintPoint = (point: Point) => string

function printPoint(point: Point) {
  console.log(`${point.x} ${point.y}`)
}
printPoint({ x: 100, y: 200 })
// プロパティ名を合わせる必要がある
// printPoint({ x: 100, z: 200})

// 関数自体の方も型エイリアス可能
type Formatter = (a: string) => string
function printName2(firstName: string, formatter: Formatter) {
  console.log(formatter(firstName))
}
printName2('test', (a: string) => {
  return `${a} です`
})

// インデックス型の型エイリアス
type Label = {
  [key: string]: string
}

const labels: Label = {
  title: 'トップページ',
  subTitle: 'サブタイトル',
  feature1: '機能1',
  feature2: '機能2'
}
// 値のインデックスとデータ型が一致しないためエラー　
// const hoge: Label = {
//   message: 100
// }

/**
 * インターフェース
 */
interface IPoint {
  x: number
  y: number
}

function iprintPoint(point: IPoint) {
  console.log(point.x)
}

interface IPoint {
  z: number
}
// インターフェースを拡張したので、zが必要！
iprintPoint({x: 100, y: 200, z: 300 })

// インターフェースはクラスの振る舞いの型も定義できる
interface IClassPoint {
  x: number
  y: number
  z?: number
}
class MyPoint implements IClassPoint {
  x: number
  y: number
}

// インターフェースではextendsを利用して他のインターフェースを拡張できる
interface Colorful {
  color: string
}
interface Circle {
  radius: number
}

interface ColorfulCircle extends Colorful, Circle {}
const cc: ColorfulCircle = {
  color: 'red',
  radius: 360
}


/**
 * ポイント
 * 
 * インターフェース：クラスやデータの一側面を定義した型。インターフェースで定義した値以外にも他のフィールドやメソッドがある前提のもの
 * 型エイリアス：オブジェクトの型そのものを表す
 * つまり。。。
 * オブジェクトそのものではなく、クラスやオブジェクトの一部のプロパティや関数を含む一部の振る舞いを定義する場合にオブジェクトを利用するのが適している！
 */


/**
 * クラス
 */
class CPoint {
  x: number
  y: number

  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
  }

  moveX(n: number): void {
    this.x += n
  }

  moveY(n: number): void {
    this.y += n
  }
}

const point = new CPoint()
point.moveX(10)
console.log(point.x) // 10

// extendsを用いて他のクラスを継承
class CPoint3D extends CPoint {
  z: number

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    super(x, y)
    this.z = z
  }

  moveZ(n: number): void {
    this.z += n
  }
}

const point3D = new CPoint3D()
point3D.moveX(10)
point3D.moveZ(30)
console.log(point3D.x) // 10
console.log(point3D.z) // 30

// implementsを利用することでクラスに対する実装の強制が可能
interface IUser {
  name: string
  age: number

  sayHello: () => string
}

class User implements IUser {
  name: string
  age: number

  constructor() {
    this.name = ''
    this.age = 0
  }

  sayHello(): string {
    return `hello. i'm ${this.name}.`
  }
}
const user = new User()
user.name = 'Ryo'
user.age = 28
console.log(user.sayHello()) // hello. i'm Ryo.
