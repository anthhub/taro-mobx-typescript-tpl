// map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

// 链路保护 protect
function protect<T>(obj: T, fn: (value: T) => any, value) {
  const caller = obj

  if (typeof fn !== "function") {
    throw TypeError("The first property must be a function！")
  }
  try {
    return fn(caller)
  } catch (error) {
    console.log(error)
    return value
  }
}

const data: any = {
  a: { b: { c: "" } }
}
;[{ a: 1 }].map(item => item)

const bb = protect(data, it => it.d.b, "xxx")

console.log("=======data2222.pt===bb==========================")
console.log(bb)
console.log("====================================")
