// Taken from https://effectivetypescript.com/2022/02/25/gentips-4-display/
export type Resolve<T> = T extends Function
  ? T
  : { [K in keyof T]: Resolve<T[K]> }
