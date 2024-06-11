export type Nullable<T> = T | null;

export type ExtractPropertyType<T, K extends keyof T> = T[K];
