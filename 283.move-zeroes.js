/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let pos = 0;
    for (let num of nums) {
        if (num != 0 ) {
            nums[pos] = num;
            pos++
        }
    }
    while (pos < nums.length) {
        nums[pos] = 0;
        pos++;
    }
};
// @lc code=end

