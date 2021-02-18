import Vue from './Vue';

console.log('Vue:', Vue);

new Vue({
    el: '#app',
    data() {
        return {
            title: 'Vue Demo示例1',
            isShow: true,
            webSite: 'http://www.baidu.com',
        }
    },
    methods: {
        clear() {
            console.log('clear');
            this.title = 'Vue Demo示例2';
        },
        show() {
            console.log('show');
            this.isShow = !this.isShow;
        }
    },

    created() {
        console.log(this.data);
    }
});
