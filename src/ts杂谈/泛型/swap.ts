/**
 * 泛型：
 *
 * */

// 使用泛型 + 元组 交换数据
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

console.log(swap([7, 'seven']));



// 泛型约束
