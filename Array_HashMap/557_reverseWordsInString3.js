/**
 * Problem: 557 https://leetcode.com/problems/reverse-words-in-a-string-iii
 */

/**
 * Solution: Loop from start to next space as end index and reverse from [start, end]
 */

/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (str) {
  let revStr = "";
  for (let i = 0; i < str.length; ) {
    let j = i;
    while (j < str.length) {
      if (str[j] !== " ") j++;
      else break;
    }
    revStr += reverseStr(str, "", i, j - 1);
    if (j + 1 <= str.length - 1) revStr += " ";
    i = j + 1;
  }

  return revStr;
};

var reverseStr = (str, revStr = "", start, end) => {
  for (let i = end; i >= start; i--) revStr += str[i];
  return revStr;
};
