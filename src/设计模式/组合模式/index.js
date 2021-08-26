// 组合模式（整体 - 部分模式）
class Ticket {
  create () {
    console.log('创建了机票订单')
  }
}

class Hotel {
  create () {
    console.log('创建了酒店订单')
  }
}

class Order {
  constructor() {
   this.orders = []
  }

  addOrder (order) {
    this.orders.push(order)
    return this
  }

  create () {
    for (let order of this.orders) {
      order.create()
    }
  }
}

const order = new Order()
order.addOrder(new Ticket()).addOrder(new Ticket()).addOrder(new Hotel()).create()