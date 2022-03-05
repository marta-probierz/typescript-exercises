/**
 * Implement a utils If which accepts condition C, a truthy
 * return type T, and a falsy return type F. C is expected
 * to be either true or false while T and F can be any type.
 */

type If<C extends boolean, T, F> = C extends true ? T : F

////////////////////////////////////////////////////////////////////////////////
////////////////////   TEST CASES - look but don't modify   ////////////////////
////////////////////////////////////////////////////////////////////////////////   
type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>

type Expect<T extends true> = T
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
