type PromiseFlat<T> = T extends Promise<infer K> ? PromiseFlat<K> : T

declare function PromiseAll<T extends unknown[]>(values:  readonly [...T]): Promise<{
  [K in keyof T]: PromiseFlat<T[K]>
}>