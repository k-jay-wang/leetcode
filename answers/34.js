/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
    // 进行两次二分查找
    if (!nums || nums.length === 0) return [-1, -1];
    if (nums.length === 1) return nums[0] === target ? [0,0] : [-1, -1];
    let l = 0, r = nums.length - 1;
    const one = binarySearch(nums, 0, r, target, false);
    console.log('wocao', one);
    const two = binarySearch(nums, one, r, target, true);
    return [one, two];
};

var binarySearch = function(nums, l, r, target, isLast) {
    let res = -1;
    if (l === r) {
        // 判断极端情况
        if (nums[l] === target) {
            return l;
        } else if (isLast) {
            return l - 1
        }
    }
    // 二分查找
    while (l <= r) {
        let mid = l + (r - l >> 1);
        console.log(l, r, mid, isLast);
        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            // 相等时判断前一位是不是小于target或者是第0位
            if (isLast) {
                if ((nums[mid + 1] !== undefined && nums[mid + 1] > target) || (nums[mid + 1] === undefined)) {
                    res = mid;
                    break;
                } else {
                    l = mid + 1;
                }
            } else {
                if ((mid > 0 && nums[mid - 1] < target) || (mid === 0)) {
                    res = mid;
                    break;
                } else {
                    r = mid - 1;
                }
            }
        }
    }
    return res;
}

searchRange([5,7,7,8,8,10],8);