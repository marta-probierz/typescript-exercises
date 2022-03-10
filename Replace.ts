/**
 * Implement Replace<S, From, To> which replace the string From
 * with To once in the given string S.
 */

type Replace<S extends string, From extends string, To extends string> = From extends "" ? S : S extends `${infer L}${From}${infer R}` ? `${L}${To}${R}`: S;

////////////////////////////////////////////////////////////////////////////////
////////////////////   TEST CASES - look but don't modify   ////////////////////
////////////////////////////////////////////////////////////////////////////////   
type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]

type Expect<T extends true> = T
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
