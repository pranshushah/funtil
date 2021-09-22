import {O,T} from 'ts-toolbelt';
export type Head<T extends any[]> = T extends ([any,...any[]])?T[0]:never;

type Tail<T extends any[]> = T extends ([_:any,...tail:infer A ])?A :[];

type hasTail<T extends any[]> = T extends ([]|[any]) ? false:true;

export type StrictCurry<P extends any[],R> = (arg0:Head<P>)=> hasTail<P> extends true ? StrictCurry<Tail<P>,R> : R;

export type StrictUnCurry<P extends any[],R> = (...arg:P)=> R;

export type Unary = (arg: any) => any

export type Pred<T extends any[]>= (...args:T)=> boolean; 

export type Binary = (arg1:any,arg2:any) => any

export type Obj<T> =  Record<string | number, T>

export type Any_Obj = { [key in string|number]: any }

export type Pick_by<U,T> = U extends unknown ? Partial<T>:U 

export type Ord = string | number | boolean | Date

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
]

export type DeepKeys<T,D extends number = 3> = [D] extends [never]?never: T extends Any_Obj ?{[K in keyof T]-?:K extends string|number?`${K}`|DeepKeys<T[K],Prev[D]>:never}[keyof T]:never 

export type OvarloadedParameters<T> = T extends { (...args: infer P1) : any; (...args:infer P2) : any; (...args: infer P3) : any } ? P1|P2|P3  :
T extends { (...args: infer P1) : any; (...args: infer P2) : any } ? P1|P2  :
T extends (...args: infer P) => any ? P : any


export type MergeAll<Os extends readonly object[]> =
    O.MergeAll<{}, Os, "deep", 1> extends infer M
    ? {} extends M    // nothing merged => bcs no `as const`
      ? T.UnionOf<Os> // so we output the approximate types
      : M             // otherwise, we can get accurate types
    : never;
