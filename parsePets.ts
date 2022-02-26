/**
 * 1. Create a Pet interface that extracts shared properties of both Dog and Cat interfaces
 * 2. Use your new interface to fix the parsePets function.
 * 
 * ⚠️ Don't modify the logic of the parsePets function. You should work only with types.
 */

interface Dog {
    id: number;
    name: string;
    bark: () => void;
}

interface Cat {
    id: number;
    name: string;
    meow: () => void;
}

interface Pet extends Cat, Dog {}
const dogs: Pet[] = []
const cats: Pet[] = []

function parsePets<T extends Pet>(pets: Pet[]) {
    return pets
        .filter(({ id }) => id > 2)
        .map(({ id, name }) => ({ id, name }));
}

////////////////////////////////////////////////////////////////////////////////
////////////////////   TEST CASES - look but don't modify   ////////////////////
////////////////////////////////////////////////////////////////////////////////

const parsedDogs = parsePets(dogs);
const parsedCats = parsePets(cats);

type cases = [
    Expect<Equal<typeof parsedDogs, typeof parsedCats>>
]

interface Book {
    id: number;
    title: string;
}
const books: Book[] = [];
// @ts-expect-error
const parsedBooks = parsePets(books);

type Expect<T extends true> = T
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false
