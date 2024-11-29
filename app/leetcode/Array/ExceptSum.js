// "除自身以外数组的乘积" (Product of Array Except Self)

// 给定一个整数数组 nums,返回一个新数组,其中每个元素是 nums 中所有数字的乘积,除自身以外。

// 例如,给定 nums = [1, 2, 3, 4] ,返回 [24, 12, 8, 6] 。
function expectSelf(input) {
  let reuslt = [1];
  //
  for (let i = 1; i < input.length; i++) {
    reuslt[i] = reuslt[i - 1] * input[i - 1];
  }
  let end = 1;
  // 不停的更新后项乘积就行了
  for (let j = input.length - 1; j >= 0; j--) {
    reuslt[j] = reuslt[j] * end;
    end = end * input[j];
  }
  return reuslt;
}

console.log(expectSelf([1, 2, 3, 4]));
