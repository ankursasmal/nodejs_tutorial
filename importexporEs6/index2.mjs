//1. default exp
import a from './index1.mjs'
console.log(a)
// 2. normal expotr
import {fun,roll} from './index1.mjs'
console.log(fun(),roll)
//3.  all import
import * as obj from './index1.mjs'
console.log(obk.fun(),obj.roll)


