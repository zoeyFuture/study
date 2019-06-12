import Watcher from './Watcher';

export default class Dep {
    id: number;
    subs: Array<Watcher>;

    static target: Watcher | null;

    constructor() {
        this.id = 10;
        this.subs = [];
    }

    // 添加订阅者对象
    addSub (sub: Watcher) {
        this.subs.push(sub);
    }

    // 删除订阅者对象
    removeSub (sub: Watcher) {

    }

    depend () {
        if (Dep.target) {
            this.addSub(Dep.target);
        }
    }

    notify() {
        const subs = this.subs.slice();
        for (let i = 0, l = subs.length; i < l; i++ ) {
            // 更新 Watcher
            subs[i].update();
        }
    }
}

Dep.target = null;
