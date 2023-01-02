type DeepReadonly<T> = {
    readonly [U in keyof T]: keyof T[U] extends never ? T[U] : DeepReadonly<T[U]>
}
