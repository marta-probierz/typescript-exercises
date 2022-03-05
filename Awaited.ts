/**
 * If we have a type which is wrapped type like Promise, how we can
 * get a type which is inside the wrapped type? For example if we
 * have Promise<ExampleType> how to get ExampleType?
 */

type Awaited<T> = T extends Promise<infer R> ? Awaited<R> : T;

////////////////////////////////////////////////////////////////////////////////
////////////////////   TEST CASES - look but don't modify   ////////////////////
////////////////////////////////////////////////////////////////////////////////   
type X = Promise<string>
type Y = Promise<{ field: number }>

type cases = [
  Expect<Equal<Awaited<X>, string>>,
  Expect<Equal<Awaited<Y>, { field: number }>>,
]

// @ts-expect-error
type error = Awaited<number>

type Expect<T extends true> = T
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
