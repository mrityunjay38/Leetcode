/**
 * Leetcode: https://leetcode.com/problems/word-ladder/description/
 * Same question: https://leetcode.com/problems/minimum-genetic-mutation/description/
 */

/**
 * Solution1:
 * T=O(N*L*26), where N= word bank length, Length of word, 26 alphabets
 * S=O(N)
 *
 * 1. Treat each word as a node in an unweighted graph.
 * 2. There is an edge between two words if they differ by exactly one character.
 * 3. Use BFS from beginWord to find shortest transformation sequence.
 * 4. For each word, mutate every position with 26 letters to generate neighbors.
 * 5. Use a Set for O(1) lookup and mark visited by deleting from the set.
 * 6. If endWord is not in wordList, return 0 immediately.
 *
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const bank = new Set(wordList);
  const queue = [[beginWord, 1]];
  let index = 0;

  while (index < queue.length) {
    const [word, step] = queue[index++];

    if (word === endWord) return step;

    for (let i = 0; i < word.length; i++) {
      for (const ch of "abcdefghijklmnopqrstuvwxyz") {
        const newWord = word.slice(0, i) + ch + word.slice(i + 1);

        if (bank.has(newWord)) {
          queue.push([newWord, step + 1]);
          bank.delete(newWord);
        }
      }
    }
  }

  return 0;
};
