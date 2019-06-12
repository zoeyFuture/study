{
    console.log('方法一：转字符串反转后，拼接为字符串，比较两个字符串是否相等');
    var isPalindrome = function (x) {
        if (x < 0) {
            return false;
        }
        if (x === 0) {
            return true;
        }
        var origin = x.toString();
        var array = origin.split('');
        var target = array.reverse().join('');
        return origin === target;
    };
    console.log(isPalindrome(121));
    console.log(isPalindrome(-121));
    console.log(isPalindrome(10));
    console.log(isPalindrome(222));
    console.log(isPalindrome(101));
}
{
    console.log('方法二：转换为字符串数组，比较对应位置上的值是否相同 --不在将数字转换为字符串进行比较');
    var isPalindrome = function (x) {
        return (function (s) {
            var i = 0;
            var j = s.length - 1;
            while (j >= i) {
                if (s[j] === s[i]) {
                    i++;
                    j--;
                }
                else {
                    return false;
                }
            }
            return true;
        })(x.toString());
    };
    console.log(isPalindrome(121));
    console.log(isPalindrome(-121));
    console.log(isPalindrome(10));
    console.log(isPalindrome(222));
    console.log(isPalindrome(101));
}
{
    console.log('方法三：将数字拆分为单个数值，转换数值位置后相加为新的数值，比较两个数字是否相等');
    var isPalindrome_1 = function (x) {
        if (x < 0) {
            return false;
        }
        if (x === 0) {
            return true;
        }
        var num = x;
        var numArray = [];
        while (num > 0) {
            numArray.push(num % 10);
            num = parseInt(num / 10);
        }
        var targetNum = 0;
        numArray.forEach(function (d, i) {
            targetNum += d * Math.pow(10, numArray.length - i - 1);
        });
        return targetNum == x;
    };
    console.log(isPalindrome_1(121));
    console.log(isPalindrome_1(-121));
    console.log(isPalindrome_1(10));
    console.log(isPalindrome_1(222));
    console.log(isPalindrome_1(101));
}
//# sourceMappingURL=class1.js.map