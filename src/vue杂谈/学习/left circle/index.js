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
    beforeCreate() {
        console.log('beforeCreate:');
    },
    created() {
        console.log('created');
    },
    beforeMount() {
        console.log('beforeMount');
    },
    mounted() {
        console.log('mounted');
    },
    beforeUpdate() {
        console.log('beforeUpdate');
    },
    updated() {
        console.log('updated');
    },
    beforeDestroy() {
        console.log('beforeDestroy');
    },
    deatroyed() {
        console.log('deatroyed');
    }
});