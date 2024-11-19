// "最长无重复子串" (Longest Substring Without Repeating Characters)

// 给定一个字符串 s,找出 s 中最长的无重复子串的长度。

// 例如,给定一个字符串 "abcabcbb" ,返回 3 ,因为 "abc" 是最长的无重复子串。

// 给定一个字符串 "bbbbb" ,返回 1 ,因为 "b" 是最长的无重复子串。

// 给定一个字符串 "pwwkew" ,返回 3 ,因为 "wke" 是最长的无重复子串。

function MaxSubString(input) {
  let max = 0;
  let left = 0;
  let right = 0;
  let window = new Set();
  while (right < input.length) {
    const char = input[right];
    while (window.has(char)) {
      window.delete(input[left]);
      left++;
    }
    window.add(char);
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
}
console.log(MaxSubString("bbbbb"));
