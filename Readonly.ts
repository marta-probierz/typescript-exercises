/**
 * Implement the built-in Readonly<T> generic without using it.
 * It should construcs a type with all properties of T set to readonly,
 * meaning the properties of the constructed type cannot be reassigned.
 */

type MyReadonly<T> = { readonly [K in keyof T]: T[K] } 

////////////////////////////////////////////////////////////////////////////////
////////////////////   TEST CASES - look but don't modify   ////////////////////
////////////////////////////////////////////////////////////////////////////////   
interface Todo {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type Expected1 = Readonly<Todo>;

/**
 * Equal to Expected1. Created to show you,
 * what Readonly does under the hood.
 */
interface Expected2 {
  readonly title: string
  readonly description: string
  readonly completed: boolean
  readonly meta: {
    author: string
  }
}

type cases = [
  Expect<Equal<MyReadonly<Todo>, Expected1>>,
  Expect<Equal<MyReadonly<Todo>, Expected2>>,
]

type Expect<T extends true> = T
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
