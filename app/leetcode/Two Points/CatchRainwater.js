// 给定n个非负整数表示每个宽度为i 的柱子的高度图，计算按此排列的柱子,下雨之后能接多少雨水。

// 输入:height = [0,1,0,2,1,0,1,3,2,1,2,1]
// 输出:6
// 解释:上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水(蓝色部分表示雨水)。

// 输入:height = [4,2,0,3,2,5]
// 输出:9
// 虽然是双指针，但实际双指针的思路比较难理解，是维护两个变量一直和当前的高度进行比较，然后进行计算
// 动态规划就是直接从前往后计算，然后从后往前计算，然后直接算i的值
var trap = function (height) {
  let leftMax = [];
  let rightMax = [];
  let result = 0;

  for (let i = 0; i < height.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1] || 0, height[i]);
  }

  for (let i = height.length - 1; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1] || 0, height[i]);
  }

  for (let i = 0; i < height.length; i++) {
    let Water = Math.min(leftMax[i], rightMax[i]) - height[i];
    result += Water;
  }
  return result;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
