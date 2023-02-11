/**
 * 型注釈
 */
function test2_2(a: boolean) {
  let b = 10
  if (a) {
    let c = b + 1
    return c
  }

  // スコープ街のため見つからない
  // return c
}

/**
 * プリミティブ型
 */
let a: string = 'a'
let b: number = 1
let c: boolean = false

/**
 * 配列
 */
const array2_2: string[] = []
const u: (string | number)[] = [1, 'foo']  // union型
const t: [string, number] = ['foo', 1]     //　タプル
// × const t: [string, number] = [1, 'foo'];

/**
 * オブジェクト型
 */
const user2_2: { name: string; age?: number } = {
  name: 'ryoya',
  // ageはオプショナルなプロパティのため省略してもOK
  // age: 28
}

/**
 * 関数
 */
function sayHello(name?: string, greeting: string = 'Hello'): string {
  return `${greeting} ${name}`
}

function printName(firstName: string, formatter: (name: string) => string) {
  console.log(formatter(firstName))
}
