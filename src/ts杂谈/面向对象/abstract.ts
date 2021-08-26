
// 抽象类：抽象类是不能是梨花的
abstract class Animal {
  public name: string
  constructor(name: string) {
    this.name = name
  }

  // 抽象方法：不包含具体实现并且必须在派生类中实现
  abstract eat(): any

  run () {
    console.log('其他方法可以不实现')
  }
}

class Zoo {
  animals: Animal[]
  constructor() {
   this.animals = []
  }

  addAnimal (animal: Animal) {
    this.animals.push(animal)
  }

  feeding () {
    console.log('动物园投喂所有动物：')
    this.animals.forEach(animal => animal.eat())
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
  }

  // 抽象类的子类必须实现抽象类中的抽象方法
  eat () {
    console.log(this.name + '吃狗粮')
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name)
  }

  eat () {
    console.log(this.name + '吃猫粮')
  }
}

const dog: Dog = new Dog('旺财')
dog.eat()
const cat: Cat = new Cat('杰瑞')
cat.eat()

// 动物园
const zoo = new Zoo()
zoo.addAnimal(cat)
zoo.addAnimal(dog)

zoo.feeding()
