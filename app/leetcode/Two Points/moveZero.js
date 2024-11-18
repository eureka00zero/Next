// Given an array of integers, move all zeros to the end of the array, while preserving the order of non-zero elements."

// For example, if the input array is [0, 1, 0, 3, 12], the output should be [1, 3, 12, 0, 0].
function moveZero(nums) {
  let startIndex = 0;
  let endIndex = 1;
  while (endIndex < nums.length) {
    if (nums[startIndex] === 0 && nums[endIndex] !== 0) {
      let temp = nums[endIndex];
      nums[endIndex] = nums[startIndex];
      nums[startIndex] = temp;
      startIndex++;
      endIndex = startIndex + 1;
    } else if (nums[startIndex] !== 0) {
      startIndex++;
    }
    // 隐含了一个判断就是都不符合其实就是endindex不是0
    endIndex++;
  }
  return nums;
}

console.log(moveZero([0, 1, 0, 3, 12, 0, 15, 0, 17]));
