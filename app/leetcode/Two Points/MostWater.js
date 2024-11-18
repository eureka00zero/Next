// "盛水最多的容器" (Container With Most Water)

// 给定 n 个非负整数 a1, a2, ..., an ,
// 每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线,垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
// 找出其中的两条线,使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 给定一个数组 [1,8,6,2,5,4,8,3,7] ,返回 49 。
// 原理就在于，当宽度最宽的情况下，固定一根柱子，移动另一个根柱子，如果高度减小，那么宽度和最大值都在减小
// 也就意味着不会出现超过当前面积的情况所以可以舍弃掉，然后移动后，问题就变为另一个更小范围的解题，所以可以用双指针来解决
function getMostWarter(input) {
  let before = 0;
  let after = input.length - 1;
  let max = 0;
  while (before < after) {
    let column = Math.min(input[before], input[after]) * (after - before);
    max = Math.max(max, column);
    if (input[before] < input[after]) {
      before++;
    } else {
      after--;
    }
  }
  return max;
}

console.log(getMostWarter([1, 8, 6, 2, 5, 4, 8, 3, 7]));
