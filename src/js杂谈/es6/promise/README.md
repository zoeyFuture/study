## Promise

### Promise.all

Promise.all 接收数组，或者支持 Iterator 接口，并且返回的成员都是Promise， 只有所
有的 Promise 实例的状态都变成fulfilled，或者其中有一个变为rejected，
才会调用Promise.all方法后面的回调函数。

注意：如果作为参数的Promise实例，自己定义了catch方法，那么它一旦被rejected，
并不会触发 Promise.all() 的 catch 方法


### Promise.race

Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

race是赛跑的意思，不管是fulfilled还是rejected状态，都只返回第一个

### Promise.allSettled (ES2020引入)

Promise.allSettled 方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。

只有等到所有实例都返回结果，不管是 fulfilled 还是 rejected，包装实例才会结束，回调函
数接收的参数都是一个数组

注意：Promise.allSettled 状态返回的总是 fulfilled 状态，不会是 rejected 状态，返回的是数组，每项里面会包含输入的 Promise 的状态的值

当不关系异步操作结果，而只关系有没有结束就可以使用 Promise.allSettled

该方法 - ES2020引入

### Promise.any (ES2021引入)

Promise.any() 接收一组 Promise 实例，包装一个新的Promise实例返回

只要参数实例有一个变成 fulfilled 状态，包装实例就会变成 fulfilled 状态；
如果所有参数实例都变成 rejected 状态，包装实例就会变成 rejected 状态

### Promise API 对比

|  方法名   | 参数  | then | catch |
|  ----  | ----  |  ----  | ----  |      
| Promise.all           | 数组 | 所有 fulfilled 的按顺序的值      | 第一个 rejected 的值 |
| Promise.race          | 数组 | 第一个 fulfilled 的值         | 第一个 rejected 的值 |
| Promise.allSettled    | 数组 | 所有 Promise 的按顺序状态信息， fulfilled 时返回： { status: 'fulfilled', value: 'fulfilled' }, rejected 时返回：{ status: 'rejected', reason: 'rejected' } | 永远不会调用 |
| Promise.any           | 数组 | 第一个 fulfilled 的值         | 当所有入参都是 rejected 时，catch 接收错误：AggregateError: All promises were rejected |

