// 给定一个未排序的整数数组,找出缺失的第一个正整数。

// 例如,给定 nums = [3, 4, -1, 1] ,返回 2 。

// 因为 2 是第一个缺失的正整数。

// 给定 nums = [1, 2, 0] ,返回 3 。

// 因为 3 是第一个缺失的正整数。

function getFirstNum(nums) {
  let map = new Map();
  let result = Infinity;
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 1);
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0 && !map.has(nums[i] + 1)) {
      result = Math.min(result, nums[i] + 1);
    }
  }

  return result < Infinity ? result : nums.length;
}

function firstMissingPositive(nums) {
  let numSet = new Set(nums);
  let i = 1;
  while (numSet.has(i)) {
    i++;
  }
  return i;
}

console.log(firstMissingPositive([1, 2, 0]));
