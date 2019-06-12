var User = require('./user');
function insert() {
    var user = new User({
        userName: "账单",
        userPswd: "123456",
        age: 20,
        loginTime: new Date(),
    });
    user.save(function (err, res) {
        if (err) {
            console.log('insert Error:', err);
        }
        console.log('insert Res:', res);
    });
}
function update() {
    var whereUserName = { 'userName': '张三' };
    var updateUserPswd = { 'userPswd': '654321' };
    User.update(whereUserName, updateUserPswd, function (err, res) {
        if (err) {
            console.log('update Error:', err);
        }
        console.log('update Res:', res);
    });
}
function findByRegex() {
    var whereStr = {
        'userName': {
            $regex: /张/i
        }
    };
    User.find(whereStr, function (err, res) {
        if (err) {
            console.log("findByRegex Error:" + err);
        }
        else {
            console.log("findByRegex Res:" + res);
        }
    });
}
insert();
//# sourceMappingURL=test.js.map