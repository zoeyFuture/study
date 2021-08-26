
// 实现相同接口的类型可以看作是同一类型
interface DaoService {
  add(): number
}

class DaoServiceImpl1 implements DaoService {
  add() {
    return 1
  }
}

class DaoServiceImpl2 implements DaoService {
  add () {
    return 2
  }
}

let daoService1 = new DaoServiceImpl1()
let daoService2 = new DaoServiceImpl2()

console.log(daoService1.add()) // 1
console.log(daoService2.add()) // 2
