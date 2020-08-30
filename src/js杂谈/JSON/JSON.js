const data = {
    "code": 1,
    "data": [
        {
            "id": 1,
            "name": "系统管理",
            "children": [
                {
                    "id": 11,
                    "name": "数据源管理"
                },
                {
                    "id": 12,
                    "name": "数据源管理"
                },
            ]
        },
        {
            "id": 2,
            "name": "系统管理",
            "children": [
                {
                    "id": 16,
                    "name": "数据源管理"
                },
                {
                    "id": 17,
                    "name": "数据源管理"
                }
            ]
        }
    ],
    "success": true
}

// 第二个参数：1、方法 2、数组

// 将序列化后的每一个对象传进方法里进行处理
const str = JSON.stringify(data, function(key, val){
    console.log("key is %s", key);
    console.log("val is %s", typeof(val));
    return val;
});
console.log('str:', str)

// 序列化，即过滤字段信息：遍历对象时，是可以过滤执行操作
console.log(JSON.stringify(data, ["name", "info", "sex"]))
