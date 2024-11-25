// 给定两个字符串 S 和 T,在 S 中找出包含 T 所有字符的最短子串。

// 例如,给定 S = "ADOBECODEBANC" 和 T = "ABC" ,返回 "BANC" 。

// 如果 S 中没有包含 T 所有字符的子串,则返回空字符串 "" 。

function getMinSubString(s, t) {
  let leftIndex = 0;
  let rightIndex = 0;
  let map = new Map();
  let result = "";
  for (let c of t) {
    map.set(c, map.has(c) ? map.get(c) + 1 : 1);
  }
  let needLength = map.size;
  while (rightIndex < s.length) {
    let item = s[rightIndex];
    if (map.has(item)) {
      map.set(item, map.get(item) - 1);
      if (map.get(item) === 0) needLength -= 1;
    }
    while (needLength === 0) {
      const newResult = s.substring(leftIndex, rightIndex + 1);
      if (!result || newResult.length < result.length) {
        result = newResult;
      }

      const item2 = s[leftIndex];
      if (map.has(item2)) {
        map.set(item2, map.get(item2) + 1);
        if (map.get(item2) === 1) {
          needLength += 1;
        }
      }
      leftIndex += 1;
    }
    rightIndex += 1;
  }
  return result;
}

console.log(getMinSubString("ADOBECODEBANC", "ABC"));
