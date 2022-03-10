/**
 * Implement the JavaScript Array.concat function in the type system.
 * A type takes the two arguments. The output should be a new array
 * that includes inputs in ltr order.
 */

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

////////////////////////////////////////////////////////////////////////////////
////////////////////   TEST CASES - look but don't modify   ////////////////////
////////////////////////////////////////////////////////////////////////////////   
type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

type Expect<T extends true> = T
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
