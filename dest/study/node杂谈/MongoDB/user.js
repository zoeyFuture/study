var mongodb = require('./mongodb');
var Schema = mongodb.Schema;
var userSchema = new Schema({
    userName: { type: String },
    userPswd: { type: String },
    age: { type: Number },
    loginTime: { type: Date },
});
module.exports = mongodb.model('User', userSchema);
//# sourceMappingURL=user.js.map