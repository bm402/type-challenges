type Flatten<A extends any[], B extends any[] = []> = A extends [infer S, ...infer T] 
    ? S extends any[]
        ? Flatten<T, [...B, ...Flatten<S>]>
        : Flatten<T, [...B, S]>
    : B
