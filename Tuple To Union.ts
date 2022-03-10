/**
 * Implement a generic TupleToUnion<T> which covers
 * the values of a tuple to its values union.
 */

type TupleToUnion<T extends unknown[]> = T[number];

////////////////////////////////////////////////////////////////////////////////
////////////////////   TEST CASES - look but don't modify   ////////////////////
////////////////////////////////////////////////////////////////////////////////   
type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]

type Expect<T extends true> = T
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
