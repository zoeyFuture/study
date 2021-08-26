class RangeIterator {
    constructor(start, stop) {
        this.value = start
        this.stop = stop
    }

    [Symbol.iterator] () {
        return this
    }

    next () {
        const value = this.value
        if (value < this.stop) {
            this.value ++
            return {
                value,
                done: false,
            }
        }
        return {
            value: undefined,
            done: true,
        }
    }
}

function range (start, stop) {
    return new RangeIterator(start, stop)
}

for (const value of range(0, 3)) {
    console.log('value:', value)
}
