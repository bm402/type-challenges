type Chainable<opts = {}> = {
  option<K extends string, V>(key: K extends keyof opts ? never : K, value: V): Chainable<Omit<opts, K> & { [key in K]: V }>
  get(): opts
}
