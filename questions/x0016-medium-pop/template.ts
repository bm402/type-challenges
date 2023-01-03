type Pop<T extends any[]> = T extends [...infer U, unknown] ? U : []
