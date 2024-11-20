// 给你一个整数数组nums和一个整数k，请你返回 nums 中和为k的子数组的数目。
// 示例 1:
// 输入:nums = [1,1,1], k = 2
// 输出:2
// 示例 2:
// 输入:nums = [1,2,3], k = 3
// 输出:2

// 前缀和的思路，用map存已有的sum和数量，前缀和还得写几道题
function subarraySum(nums, k) {
  // 初始化前缀和数组
  let prefixSum = new Array(nums.length + 1).fill(0);

  // 计算前缀和
  for (let i = 1; i <= nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
  }

  // 初始化哈希表
  let hashMap = new Map();
  hashMap.set(0, 1); // 前缀和为1，代表单独一个数就是子集的情况

  // 初始化计数器
  let count = 0;

  // 遍历前缀和数组
  // 当然也可以一次遍历即构造map，又计算count
  for (let i = 1; i < prefixSum.length; i++) {
    let target = prefixSum[i] - k;
    if (hashMap.has(target)) {
      count += hashMap.get(target); // 因为可能有多数的和是一样的，但是数不一样，所以前缀和要计数
    }
    if (hashMap.has(prefixSum[i])) {
      hashMap.set(prefixSum[i], hashMap.get(prefixSum[i]) + 1);
    } else {
      hashMap.set(prefixSum[i], 1);
    }
  }

  return count;
}

// 示例用法
let nums = [1, 1, 1];
let k = 2;
console.log(subarraySum(nums, k)); // 输出: 2
