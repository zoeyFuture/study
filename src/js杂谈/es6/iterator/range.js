class RangeIterator {
    constructor(start, stop) {
        this.start = start
        this.stop = stop
        this.value = start
    }

    // Iterator 遍历器对象生成函数，实现遍历器接口
    [Symbol.iterator]() {
        return this
    }

    // next：Iterator 必须实现 next方法
    next () {
        console.log('next')
        const value = this.value
        if (value < this.stop) {
            this.value++;
            return {
                value,
                done: false
            }
        }
        return {
            done: true
        }
    }

    // return：for...of循环提前退出时调用（通常因为出错，或者break语句）return 方法
    return () {
        console.log('return')
            // TODO 注：如果一个对象在完成遍历前，需要清理或者释放资源，就可以部署 return 方法，例如读取文件资源
            /*** 释放资源 ***/
        return {
            done: true
        }
    }

    // throw：throw方法主要是配合 Generator 函数使用，一般的遍历器对象用不到这个方法
    throw () {
        console.log('throw')
    }
}

function range(start, stop) {
    return new RangeIterator(start, stop)
}

// const range = new RangeIterator(1, 5);

for (let value of range(1, 5)) {
    console.log('value:', value);
    if (value > 3) {
        return false
    }
}
