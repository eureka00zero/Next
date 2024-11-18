// 给定一个未排序的整数数组nums,找出数字连续的最长序列
// 示例1:nums = [100,4,200,1,3,2],返回结果4,因为最长的数字连续序列是[1,2,3,4].它的长度为4
// 示例2:nums = [0,3,7,2,5,8,4,6,0,1],返回结果9,因为最长的数字连续序列是[0,1,2,3,4,5,6,7,8].它的长度为9
// 示例3:nums = [1,2,0,1],返回结果2,因为最长的数字连续序列是[0,1].它的长度为2

function longestConsecutive(nums) {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  let longest = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let current = 1;

      while (set.has(currentNum + 1)) {
        current += 1;
        currentNum += 1;
      }
      longest = Math.max(current, longest);
    }
  }
  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
