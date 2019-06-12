/**
 * 双向数据绑定
 *
 * @desc：实现一个自定义 MVVM 框架
 * */
import { IVue } from "./interface";
import Observer from './Observer';
import Compile from './Compile';

export default class Vue implements IVue {
    el: Node;
    data?: {};
    methods?: {
        [key: string]: () => void,
    };

    constructor(options: any) {
        this.el = document.querySelector(options.el);
        this.data = options.data();
        this.methods = options.methods;

        this.start();
    }

    /**
     * 开启上香数据绑定之旅
     *  1、设置data为可观测对象，进行数据监听
     *  2、编译解析指令：v-on:click、v-model、v-text、v-if
     * */
    start () {
        const observer = new Observer(this.data);
        const compile = new Compile(this);
    }
}
