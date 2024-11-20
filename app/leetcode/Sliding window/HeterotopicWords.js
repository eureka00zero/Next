//给定两个字符串s和p，找到s中所有p的异位词的子串，返回这些子串的起始索引。

// 异位词 指由相同字母组成的字符串（包括相同的字母重复）。
// 示例 1:

// 输入: s = "cbaebabacd", p = "abc"
// 输出: [0,6]
// 解释:
// 起始索引等于 0 的子串是 "cba", 它是 "abc" 的异位词。
// 起始索引等于 6 的子串是 "bac", 它是 "abc" 的异位词。
// 示例 2:

// 输入: s = "abab", p = "ab"
// 输出: [0,1,2]
// 解释: 起始索引等于 0 的子串是 "ab", 它是 "ab" 的异位词。
// 起始索引等于 1 的子串是 "ba", 它是 "ab" 的异位词。
// 起始索引等于 2 的子串是 "ab", 它是 "ab" 的异位词。
function getHaterotopicWords(s, p) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  function isHeterotopicWords(wordsNow, p) {
    let map = new Map();
    let array = wordsNow.split("");
    let array2 = p.split("");
    for (let i = 0; i < array.length; i++) {
      if (map.has(array[i])) {
        map.set(array[i], map.get(array[i]) + 1);
      } else {
        map.set(array[i], 1);
      }
    }
    for (let i = 0; i < array2.length; i++) {
      if (!map.has(array2[i])) {
        return false;
      } else {
        map.set(array2[i], map.get(array2[i]) - 1);
        if (map.get(array2[i]) < 0) {
          return false;
        }
      }
    }
    return true;
  }

  while (rightIndex < s.length) {
    let wordsNow = s.slice(leftIndex, rightIndex + 1);
    if (wordsNow.length === p.length) {
      if (isHeterotopicWords(wordsNow, p)) {
        result.push(leftIndex);
      }
      leftIndex++;
      rightIndex++;
    } else if (wordsNow.length < p.length) {
      rightIndex++;
    } else {
      leftIndex++;
    }
  }

  return result;
}

console.log(getHaterotopicWords("abab", "ab"));
