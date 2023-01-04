type LengthOfString<S extends string, T extends string[] = []> = S extends `${ infer U }${ infer V }` ? LengthOfString<V, [...T, U]> : T['length']
