export type Head<T extends any[]> = T extends ([any,...any[]])?T[0]:never;

type Tail<T extends any[]> = T extends ([_:any,...tail:infer A ])?A :[];

type hasTail<T extends any[]> = T extends ([]|[any]) ? false:true;

export type StrictCurry<P extends any[],R> = (arg0:Head<P>)=> hasTail<P> extends true ? StrictCurry<Tail<P>,R> : R;

export type StrictUnCurry<P extends any[],R> = (...arg:P)=> R;

export type Unary = (arg: any) => any

