new Vue({
    el: '#app',
    data: function () {
        return {
            firstName: 'Tom',
            lastName: 'Jerry',
            complexObj: {
                name: '张三',
            },
        };
    },
    computed: {
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function (_val) {
                var names = _val.split(' ');
                this.firstName = name[0];
                this.lastName = name[1];
            }
        },
    },
    watch: {
        firstName: function (_val) {
            console.log('watch - firstName:', _val);
            this.fullName = _val + ' ' + this.lastName;
        },
        lastName: function (_val) {
            console.log('watch - lastName:', _val);
            this.fullName = this.firstName + ' ' + _val;
        },
        nameChange: {
            handler: function (oldVal, newVal) {
                console.log('name change:', oldVal, newVal);
            },
            deep: true,
        },
    },
    methods: {
        clear: function () {
            this.title = 'Vue Demo示例1';
        },
        show: function () {
            this.isShow = !this.isShow;
        }
    },
});
//# sourceMappingURL=index.js.map