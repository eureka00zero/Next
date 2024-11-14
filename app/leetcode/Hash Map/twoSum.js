/* 
  给定一个整数数组nums和一个目标值target，找出目标和为target的两个整数，返回下表
  示例：nums = [2,7,11,15], target = 9
        nums = [3,2,4], target = 6
        nums= [3,3], target = 6
 */

function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
}
twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
