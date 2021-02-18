import Dep from './Dep';

/***
 * 观测者
 * @desc 将对象转变为可观测对象，对所有对象属性添加订阅者数组
 * */
export default class Observer {
    constructor (obj: any) {
        this.observable(obj);
    }

    /**
     * 将对象的每个属性都转换为可观测对象
     * */
    observable(_obj: any) {
        if (!_obj || typeof _obj !== 'object') {
            return;
        }

        let keys = Object.keys(_obj);
        keys.forEach((key) => {
            this.defineReactive(_obj, key, _obj[`${key}`]);
        });
        return _obj;
    }

    /**
     * 转换对象属性为可观测，并添加订阅者信息
     * */
    defineReactive(obj: any, key: string, val: any) {
        let dep = new Dep();
        Object.defineProperty(obj, key, {
            get: function reactiveGetter() {
                // 检测是否处于依赖收集状态
                if (Dep.target) {
                    // 建立依赖关系
                    dep.depend();
                }
                console.log(`${key} 被依赖`);
                return val;
            },
            set(_val) {
                console.log(`${key} 被修改`);
                val = _val;

                // 属性发生变化，通知所有订阅者
                dep.notify();
            }
        });
    }
}
