const User = require('./user');

/**
 * 插入数据信息
 */
function insert() {
    const user = new User({
        userName: "账单", // 用户账户
        userPswd: "123456", // 用户密码
        age: 20, // 年龄
        loginTime: new Date(), // 最近登录时间
    });

    user.save(function(err, res) {
        if (err) {
            console.log('insert Error:', err);
        }

        console.log('insert Res:', res);
    });
}


/**
 * 更新数据
 */
function update() {
    const whereUserName = { 'userName': '张三' };
    const updateUserPswd = { 'userPswd': '654321' };

    User.update(whereUserName, updateUserPswd, function(err, res) {
        if (err) {
            console.log('update Error:', err);
        }

        console.log('update Res:', res);
    });
}
/**
 * 模糊查询
 */
function findByRegex() {
    var whereStr = {
        'userName': {
            $regex: /张/i
        }
    };

    User.find(whereStr, function(err, res) {
        if (err) {
            console.log("findByRegex Error:" + err);
        } else {
            console.log("findByRegex Res:" + res);
        }
    })
}

insert();