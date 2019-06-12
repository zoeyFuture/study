/**
 * 实现解析器
 * @desc 结点解析器，用来获取和解析每个结点和指令，根据初始化的模板数据创建订阅器 watcher
 * @param {dom} el 待解析的结点
 * @returns null
 */
import { IVue } from "./interface";
import Watcher from './Watcher';

export default class Compile {
    vm: IVue;
    constructor(vm: IVue) {
        this.vm = vm;

        this.compile(this.vm.el);
    }

    compile(el: any) {
        let nodes = el.children;
        for (let i = 0; i < nodes.length; i += 1) {
            let node = nodes[i];
            if (node.children.length > 0) {
                this.compile(node);
            }

            // 解析 v-on:click 指令
            if (node.hasAttribute('v-on:click')) {
                const attr = node.getAttribute('v-on:click');

                // 监听原生事件
                node.addEventListener('click', this.vm.methods[attr].bind(this.vm.data));
            }

            // 解析 v-if 指令
            if (node.hasAttribute('v-if')) {
                const attr = node.getAttribute('v-if');
                new Watcher(this.vm, attr, (_val) => {
                    console.log('v-if:', _val);
                    _val === true ? node.style.display = 'block' : node.style.display = 'none';
                });
            }

            // 解析 v-model 指令
            if (node.hasAttribute('v-model')) {
                const attr = node.getAttribute('v-model');
                new Watcher(this.vm, attr, (_val) => {
                    console.log('_val:', _val);
                    node.value = _val;
                });

                // 监听原生事件
                node.addEventListener('input', (e: any) => {
                    this.vm.data[attr] = e.target.value;
                    console.log('e.target.value:', e.target.value);
                });
            }

            // 解析 v-text 指令
            if (node.hasAttribute('v-text')) {
                let attr = node.getAttribute('v-text');
                new Watcher(this.vm, attr, (_val) => {
                    console.log('innerText:', _val);
                    node.innerText = _val;
                });
            }
        }
    }
}
