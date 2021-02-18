class Sinleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }

    static getInstance(name) {
        if (!this.instance) {
            this.instance = new Sinleton(name);
        }
        return this.instance;
    }
}


class NewSinleton {
    constructor(name) {
        this.name = name;
    }

    static getInstance(name) {
        // 注意：在静态方法中，this 指向类，而不指向任何实例，所以可以在这里使用 this 创建一个实例
        if (!NewSinleton.instance || !NewSinleton.instance instanceof this) {
            NewSinleton.instance = new this(name);
        }
        return NewSinleton.instance;
    }
}

const a = Sinleton.getInstance("a");
const b = Sinleton.getInstance("b");
console.log('a', 'b', a == b);

const c = NewSinleton.getInstance("c");
const d = NewSinleton.getInstance("d");
console.log('c', 'd', c == d);