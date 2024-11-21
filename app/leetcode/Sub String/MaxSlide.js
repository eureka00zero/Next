// The problem statement is:

// "滑动窗口最大值" (Sliding Window Maximum)

// 给定一个数组 nums 和一个大小为 k 的窗口，请找出每个窗口内的最大值。

// 例如,给定一个数组 [1,3,-1,-3,5,3,6,7] 和窗口大小 k = 3 ,返回 [3,3,5,5,6,7] 。
// math.max取值是k个数找，所以时间复杂度是O(nk)
function MaxSlide(nums, k) {
  let result = [];
  let maxNow = Math.max(...nums.slice(0, k));
  result.push(maxNow);
  for (let i = 1; i < nums.length - k + 1; i++) {
    let max = Math.max(...nums.slice(i, k + i));
    result.push(max);
  }
  return result;
}

// 优化解法，使用单调队列，时间复杂度是O(n)
// 满足可以弹出队首和队尾的元素且元素排列单调的双端队列为单调队列
function MaxSlide2(nums, k) {
  let queue = [];
  let result = [];
  for (let i = 0; i < k; i++) {
    // 小于nums[i]的一律弹出来
    // 为什么和队尾比，因为是单调队列，要保证队列是从大到小排列的，且只要是队列单调，里面有几个元素我们并不关心
    // 比如1, 3, -1, 2, 5  2比-1大 -1会出来，但是不比3大，那么2进去 最后只留3和2在队列里
    // 因为3如果被移除的时候2就成最大了，所以要这么保证
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    // 压入最大的到末尾
    queue.push(i);
  }
  result.push(nums[queue[0]]);
  for (let i = k; i < nums.length; i++) {
    while (queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
      queue.pop();
    }
    queue.push(i);
    // 左侧的最大值已经不在范围了要移除
    while (queue[0] <= i - k) {
      queue.shift();
    }
    result.push(nums[queue[0]]);
  }
  return result;
}
console.log(MaxSlide([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(MaxSlide2([1, 3, -1, -3, 5, 3, 6, 7], 3));
