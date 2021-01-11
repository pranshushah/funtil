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

export type MergeAll<Os extends readonly object[]> =
    O.MergeAll<{}, Os, "deep", 1> extends infer M
    ? {} extends M    // nothing merged => bcs no `as const`
      ? T.UnionOf<Os> // so we output the approximate types
      : M             // otherwise, we can get accurate types
    : never;
