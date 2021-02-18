
// MessageChannel 构造函数，会返回带有两个MessagePort属性的MessageChannel的新对象
// 注：此特性在 Web Worker 中可用。
const channel = new MessageChannel()

// MessageChannel创建了一个通信的管道，这个管道有两个端口，
// 每个端口都可以通过postMessage发送数据，而一个端口只要绑
// 定了onmessage回调方法，就可以接收从另一个端口传过来的数据。

// 注：MessageChannel和web worker传递的对象都是深拷贝的

// 实例的两个端口都是可读的
channel.port1.onmessage = (message) => {
  console.log('Port1 Received Message:', message)
}

channel.port2.onmessage = (message) => {
  console.log('Port2 Received Message:', message)
}

// 两个 port 可以调用 postMessage 现象对方发送消息
channel.port1.postMessage('你好')

// 参考文章
// https://www.jianshu.com/p/4f07ef18b5d7


