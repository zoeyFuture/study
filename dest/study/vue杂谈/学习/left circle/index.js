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
    beforeCreate: function () {
        console.log('beforeCreate:');
    },
    created: function () {
        console.log('created');
    },
    beforeMount: function () {
        console.log('beforeMount');
    },
    mounted: function () {
        console.log('mounted');
    },
    beforeUpdate: function () {
        console.log('beforeUpdate');
    },
    updated: function () {
        console.log('updated');
    },
    beforeDestroy: function () {
        console.log('beforeDestroy');
    },
    deatroyed: function () {
        console.log('deatroyed');
    }
});
//# sourceMappingURL=index.js.map