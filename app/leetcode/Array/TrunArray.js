// 给定一个数组 nums 和一个整数 k,将数组 nums 向右轮转 k 步。

// 例如,给定 nums = [1,2,3,4,5,6,7] 和 k = 3 ,返回 [5,6,7,1,2,3,4] 。

// 如果 k 大于数组长度,则取 k 除以数组长度的余数作为轮转步数。
const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};
function TurnArray(input, k) {
  k %= input.length;
  reverse(input, 0, input.length - 1);
  reverse(input, 0, k - 1);
  reverse(input, k, input.length - 1);
  return input;
}
console.log(TurnArray([1, 2, 3, 4, 5, 6, 7], 3));
