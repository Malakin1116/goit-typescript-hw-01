function merge<T extends object, U extends object>(objT: T, objU: U): T & U {
  return Object.assign(objT, objU);
}
