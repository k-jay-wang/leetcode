

// 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
// 示例 3:

// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 

// 提示：
// 0 <= s.length <= 5 * 104
// s 由英文字母、数字、符号和空格组成

function test(s) {
    // 判断字符串长度边界
    if (!s || s.length === 1) return s;
    // 定义map值，定义遍历
    let arr = new Array(26).fill(-1);
    let l = 0, r = 0, len = s.length, max = 0;
    const a = 'a'.charCodeAt();
    while(r < len) {
        const temp = s[r].charCodeAt() - a;
        if (arr[temp] < 0) {
            arr[temp] = r;
        } else {
            // map中已存在此字符串，计算当前的长度和最大值比较
            const nowLen = r - l;
            if (nowLen > max) max = nowLen;
            l = arr[temp] + 1;
            arr[temp] = r;
        }
        r++;
    }
    max = r - l > max ? r - l : max;
    return max;
}
const res = test('acdacqwertyu');
console.log(res);


setTimeout(_ => console.log(1))
new Promise((resolve, reject) => {
  resolve()
  console.log(2)
  reject()
  console.log(3)
}).then(_ => {
  setTimeout(_ => console.log(4))
  console.log(5)
  Promise.resolve().then(_ => {
    console.log(6)
  }).then(_ => {
    Promise.resolve().then(_ => {
      console.log(7)
    })
  })
}).catch(_ => {
    console.log(8)
})
console.log(9)