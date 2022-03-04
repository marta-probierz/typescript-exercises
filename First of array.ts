/**
 * Implement a generic First<T> that takes an Array T
 * and returns it's first element's type.
 */

type First<T extends any[]> = T extends [] ? never : T[0];

////////////////////////////////////////////////////////////////////////////////
////////////////////   TEST CASES - look but don't modify   ////////////////////
////////////////////////////////////////////////////////////////////////////////   
type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
]

type Expect<T extends true> = T
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
