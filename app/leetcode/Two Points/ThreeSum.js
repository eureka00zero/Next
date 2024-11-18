// "三数之和" (3Sum)

// 给定一个包含 n 个整数的数组 nums,判断 nums 中是否存在三个元素 a, b, c
// 使得 a + b + c = 0 ? 请找出所有满足该条件且不重复的三元组。

// 例如,给定一个数组 [-1, 0, 1, 2, -1, -4] ,返回 [[-1, -1, 2], [-1, 0, 1]] 。
function ThreeSum(input) {
  let result = [];
  input.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i - 1]) continue;
    let before = i + 1;
    let after = input.length - 1;
    let target = input[i];
    while (before < after) {
      let sum = input[before] + input[after] + target;
      if (sum === 0) {
        result.push([input[i], input[before], input[after]]);
        before++;
        after--;
      } else if (sum < 0) {
        before++;
      } else if (sum > 0) {
        after--;
      }
    }
  }
  return result;
}

console.log(ThreeSum([0, 0, 0]));
