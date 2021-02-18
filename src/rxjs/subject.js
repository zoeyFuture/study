const { Subject, interval } = require('rxjs')

// 定义个定时器 Observable，每1秒发出一个值
const tick$ = interval(1000)

// Subject 继承 Observable，实现了 Observable 所有的方法：next()、error()、complete() -> 和es6 迭代器挂钩
const subject = new Subject()

// 将 observer1 添加到观察者列表
const sub1 = subject.subscribe((message) => {
    console.log('observer1:', message)
})

// 将 observer2 添加到观察者列表
const sub2 = subject.subscribe((message) => {
    console.log('observer2:', message)
})

// 使用 "hi there" 来通知列表中的所有观察者
subject.next('hi there');

// 将 observer1 从观察者列表中移除，取消订阅
sub1.unsubscribe();

tick$.subscribe(subject)