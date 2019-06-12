const mongodb = require('./mongodb');
const Schema = mongodb.Schema;

// 定义 Schema
const userSchema = new Schema({
    userName: { type: String }, // 用户账户
    userPswd: { type: String }, // 用户密码
    age: { type: Number }, // 年龄
    loginTime: { type: Date }, // 最近登录时间
});

// 生成 Model
module.exports = mongodb.model('User', userSchema);