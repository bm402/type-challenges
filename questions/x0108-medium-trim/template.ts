type Whitespace = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${ Whitespace }${ infer T }`
    ? Trim<T>
    : S extends `${ infer U }${ Whitespace }`
        ? Trim<U>
        : S
