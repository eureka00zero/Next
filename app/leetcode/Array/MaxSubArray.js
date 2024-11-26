// 给你一个整数数组nums，请你找出一个具有最大和的连续子数组(子数组最少包含一个元素),返回其最大和。
// 子数组 是数组中的一个连续部分。
// 示例 1:
// 输入:nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出:6
// 解释:连续子数组[4,-1,2,1]的和最大，为6。
// 示例 2:
// 输入:nums = [1]
// 输出:1
// 示例 3:
// 输入:nums = [0]
// 输出:0
// 示例 4:
// 输入:nums = [-1]
// 输出:-1
// 示例 5:
// 输入:nums = [-2147483647]
// 输出:-2147483647

// 动态规划的思路，把k的问题简化为k-1的问题

function getMaxSubArray(input) {
  let result = input[0];
  let pre = 0;
  input.forEach((element) => {
    pre = Math.max(pre + element, element);
    result = Math.max(result, pre);
  });
  return result;
}

console.log(getMaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
