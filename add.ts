/**
 * Add types to the `add` function, so it:
 * - accepts `a` parameter of type string or number
 * - accepts `b` parameter of type string or number
 * - returns type number when both `a` and `b` are of type number
 * - returns type string when at least one param is of type string
 * 
 * ⚠️ There is no need to modyfy the body of the function.
 */

function add(a:number, b:number): number;
function add(a:string, b:string):string;
function add(a:string | number, b:string | number):string;

function add(a: any, b: any) : any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }


    return String(a) + String(b);
}

////////////////////////////////////////////////////////////////////////////////
////////////////////   TEST CASES - look but don't modify   ////////////////////
////////////////////////////////////////////////////////////////////////////////
const sumA = add(1, 2);
const sumB = add(1, '2');
const sumC = add('1', 2);
const sumD = add('1', '2');

type cases = [
    Expect<Equal<typeof sumA, number>>,
    Expect<Equal<typeof sumB, string>>,
    Expect<Equal<typeof sumC, string>>,
    Expect<Equal<typeof sumD, string>>,
]

type Expect<T extends true> = T
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
