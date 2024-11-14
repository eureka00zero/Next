// 给你一个字符串数组,请你将字母异位词组合在一起。字母异位词是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次
// 示例1: 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"] 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
// 示例2: 输入: strs = [""] 输出: [[""]]
// 示例3: 输入: strs = ["a"] 输出: [["a"]]

function groupAnagrams(strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let str = strs[i].split("").sort().join("");
    if (map.has(str)) {
      map.get(str).push(strs[i]);
    } else {
      map.set(str, [strs[i]]);
    }
  }
  return map.values();
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
