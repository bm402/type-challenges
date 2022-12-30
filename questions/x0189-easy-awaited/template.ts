type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U> 
    ? U extends Promise<unknown> 
        ? MyAwaited<U> 
        : U 
    : never
