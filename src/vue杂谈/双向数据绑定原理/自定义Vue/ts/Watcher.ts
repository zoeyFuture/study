import { IVue } from "./interface";
import Dep from './Dep';

/**
 * 创建订阅者 Watcher
 */
export default class Watcher {
    vm: IVue;
    attr: string;
    cb: (val: any, oldVal: any) => void;
    value: any;

    constructor(vm: IVue, attr: string, cb: (val: any, oldVal: any) => void){
        this.vm = vm;
        this.attr = attr;
        this.cb = cb;

        this.value = this.get();
        this.update();
    }

    /**
     * 缓存自身，标记为依赖属性的依赖者
     * */
    get() {
        Dep.target = this;  // 缓存自己
        let value = this.vm.data[`${this.attr}`];
        Dep.target = null;  // 释放自己
        console.log('get:', this.attr);
        return value;
    }

    update() {
        let oldVal = this.value;
        let value = this.vm.data[this.attr];
        this.value = value;
        this.cb.call(this.vm, value, oldVal);
    }
}
