// 创建一个包含 string 的新 Buffer。 encoding 参数指定用于将 string 转换为字节的字符编码。

const buf1 = Buffer.from('this is a demo', 'utf8');
const buf2 = Buffer.from('7468697320697320612074c3a97374', 'hex');

console.log(buf1.toString());
// 打印: this is a demo
console.log(buf2.toString());
// 打印: this is a tést
console.log(buf1.toString('latin1'));
