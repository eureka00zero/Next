// 给定一个区间的集合 intervals,合并所有重叠的区间。

// 例如,给定 intervals = [[1,3],[2,6],[8,10],[15,18]] ,返回 [[1,6],[8,10],[15,18]] 。

// 如果两个区间有重叠部分,则合并为一个区间。
function getCombine(intervals) {
  let result = [];
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  for (let i = 0; i < intervals.length; i++) {
    let cur = intervals[i];
    let j = i + 1;
    while (j < intervals.length && intervals[j][0] <= cur[1]) {
      // 有重合，计算重合的右边界，而且需要继续判断有没有重合
      cur[1] = Math.max(cur[1], intervals[j][1]);
      j++;
    }
    result.push(cur);
    // 重合判断完毕，没有重合直接入数组且下标更新的非重合的index
    i = j - 1;
  }
  return result;
}

console.log(
  getCombine([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
