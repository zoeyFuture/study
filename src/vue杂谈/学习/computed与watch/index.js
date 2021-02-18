new Vue({
  el: '#app',
  data() {
    return {
      firstName: 'Tom',
      lastName: 'Jerry',

      complexObj: {
        name: '张三',
      },
    }
  },

  /**
   * computed 计算属性，类似于过滤器，对绑定到view的数据进行处理，简化模板{{}}的计算操作
   *
   * 1、computed定义的属性data中不能定义，避免重复
   * 2、computed定义的属性，可以监听get和set方法，做特殊处理
   * */
  computed: {
    fullName: {
      get() {
        return this.firstName + ' ' + this.lastName;
      },
      set(_val) {
        const names = _val.split(' ');
        this.firstName = name[0];
        this.lastName = name[1];
      }
    },
  },

  /**
   * watch一个观察（监听）动作，观察的是 data 或 computed 属性的变化
   *
   * */
  watch: {
    // 监听简单类型
    firstName(_val) {
      console.log('watch - firstName:', _val);
      this.fullName = _val + ' ' + this.lastName;
    },

    lastName(_val) {
      console.log('watch - lastName:', _val);
      this.fullName = this.firstName + ' ' + _val;
    },

    // TODO watch 监听复杂对象, 监听复杂对象属性
    nameChange: {
      handler(oldVal, newVal) {
        console.log('name change:', oldVal, newVal);
      },
      deep: true,
    },

  },
  methods: {
    clear() {
      this.title = 'Vue Demo示例1';
    },
    show() {
      this.isShow = !this.isShow;
    }
  },
});

/***
 * computed 与 watch 的区别
 *
 * computed 特性：
 *  1、是计算值
 *  2、应用场景：简化 template 里面 {{}}的计算和处理props、$emit的传值
 *  3、具有缓存性，页面重新渲染值不变化，计算属性会立即返回之前的计算结果，而不需要再次执行函数
 *
 *
 * watch 特性：
 *  1、执行观察（监听）动作
 *  2、应用场景：监听props、$emit、或组件的值执行异步操作
 *  3、无缓存性，页面重新渲染时值不变化也会执行
 *
 *
 *
 *
 *
 * */
