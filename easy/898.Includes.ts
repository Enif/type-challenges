/*
  898 - Includes
  -------
  by null (@kynefuk) #easy #array
  
  ### Question
  
  Implement the JavaScript `Array.includes` function in the type system. A type takes the two arguments. The output should be a boolean `true` or `false`.
  
  For example
  
  ```ts
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
  ```
  
  > View on GitHub: https://tsch.js.org/898
*/


/* _____________ Your Code Here _____________ */

// type Includes<T extends readonly any[], U> = T extends (infer R)[]
//   ? R extends U
//     ? U extends R
//       ? true
//       : false
//     : false
//   : false

type MyEqual<T, P> = T extends P ? P extends T ? true : false : false;
type test = MyEqual<{}, {a: 'A'}>;
type test2 = MyEqual< {a: 'A'} , {}>;


type TupleToUnion<T extends unknown[]> = T[number];
type test3 = TupleToUnion<['a', 'b', 'a']>;
type test4 = TupleToUnion<[{ readonly a: 'A' }, { a: 'A'}]>;
type test5 = {} extends test4 ? true : false;

type test6 = {} extends { a: 'A' } ? true : false;
type test7 = { a: 'A' } extends {} ? true : false;

type Includes<T extends readonly any[], U> = U extends T[number] ? true : false;

// type Includes<T extends readonly any[], U> = U extends T[number] ? T[number] extends U ? true : false : false;
type t = Expect<Equal<Includes<[{ a: 'A' }], {}>, false>>;
const a = {}
type t2 = typeof a
type t3 = Equal<t2, {}>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>, true>>,
  Expect<Equal<Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>, false>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 7>, true>>,
  Expect<Equal<Includes<[1, 2, 3, 5, 6, 7], 4>, false>>,
  Expect<Equal<Includes<[1, 2, 3], 2>, true>>,
  Expect<Equal<Includes<[1, 2, 3], 1>, true>>,
  Expect<Equal<Includes<[{}], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[boolean, 2, 3, 5, 6, 7], false>, false>>,
  Expect<Equal<Includes<[true, 2, 3, 5, 6, 7], boolean>, false>>,
  Expect<Equal<Includes<[false, 2, 3, 5, 6, 7], false>, true>>,
  Expect<Equal<Includes<[{ a: 'A' }], { readonly a: 'A' }>, false>>,
  Expect<Equal<Includes<[{ readonly a: 'A' }], { a: 'A' }>, false>>,
  Expect<Equal<Includes<[1], 1 | 2>, false>>,
  Expect<Equal<Includes<[1 | 2], 1>, false>>,
  Expect<Equal<Includes<[null], undefined>, false>>,
  Expect<Equal<Includes<[undefined], null>, false>>,
]



/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/898/answer
  > View solutions: https://tsch.js.org/898/solutions
  > More Challenges: https://tsch.js.org
*/

