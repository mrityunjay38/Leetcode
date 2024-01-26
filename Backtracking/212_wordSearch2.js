/**
 * Problem: 212 https://leetcode.com/problems/word-search-ii/
 */

/**
 * Solution: TLE but T=O(W * N * 4^w), W being length of words, N as number of cells in a matrix, w as length of a word
 */

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

var findWords = function (board, words) {
  let result = [];

  for (let w = 0; w < words.length; w++) {
    for (let row = 0; row < board.length; row++)
      for (let col = 0; col < board[row].length; col++)
        if (wordSearch(row, col, board, words[w], 0)) {
          result.push(words[w]);
          row = board.length;
          break;
        }
  }

  return result;
};

var wordSearch = function (row, col, board, word, w) {
  if (w > word.length - 1) return true;

  if (
    row < 0 ||
    col < 0 ||
    row > board.length - 1 ||
    col > board[0].length - 1 ||
    board[row][col] !== word[w] ||
    board[row][col] === "#"
  )
    return false;

  board[row][col] = "#";
  let res =
    wordSearch(row + 1, col, board, word, w + 1) ||
    wordSearch(row - 1, col, board, word, w + 1) ||
    wordSearch(row, col + 1, board, word, w + 1) ||
    wordSearch(row, col - 1, board, word, w + 1);

  board[row][col] = word[w];

  return res;
};
