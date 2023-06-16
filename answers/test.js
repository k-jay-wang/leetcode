// 深拷贝

function deepCopy(obj) {
    let res;
    // 拦截所以FALSE的情况
    if (!obj) return obj;
    if (obj instanceof Array) {
        res = new Array(obj.length);
        // 数组遍历插入新数组中，
        const len = obj.length;
        for (let i = 0; i < len; ++i) {
            res[i] = deepCopy(obj[i]);
        }
    } else if (typeof obj === 'object') {
        if (obj instanceof RegExp) {
            res = new RegExp(obj)
        }
        else if (obj instanceof Error) {
            res = new Error(obj.message)
        }
        else if (obj instanceof Date) {
            console.log(obj.getTime());
            res = new Date(obj.getTime())
        } else {
            res = {};
            // 对象遍历属性，插入新对象中
            Object.keys(obj).forEach(key => {
                const item = obj[key];
                res[key] = deepCopy(item);
            });
        }
    } else {
        res = obj;
    }
    return res;
}

// const test = {a: 1, b: 2, f: new Date(), g: new RegExp('/^[0-9]$/')}
// let a = deepCopy(test);
// console.log(a);
// a.c = {c2: 'c2'};
// a.e = undefined;
// a.f = new Date('2022-01-01');
// a.g = undefined;
// console.log(a);
// console.log(test);


// N阶楼梯，每次只能走1或2步，有多少种走法
// n = x + y * 2;

function calc(n) {
    let start = new Date().getTime();
    if (n < 1 || isNaN(n)) return false;
    let x = 0, y = 0;
    let res = 0; // 或者只用计数省空间
    while (x <= n) {
        const temp = n - x;
        if (temp % 2 === 0) {
            y = temp / 2;
            res += comb(x + y, x);
        }
        x++;
    }
    console.log('间隔', new Date().getTime() - start);
    return res;
}

function comb(m, n) {
    return jiecheng(m, n) / jiecheng(n, n);
}

function jiecheng(m, n) {
    let num = 1;
    let count = 0;
    for (let i = m; i > 0; --i) {
        if (count === n) break;
        num = num * i;
        count++;
    }
    return num;
}

function ans(n) {
    if (n < 0) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n > 2) {
        return ans(n-1) + ans(n-2);
    }
}
const start = new Date().getTime();
const ss = ans(20);
console.log('间隔', new Date().getTime() - start);
console.log(ss);
calc(20);