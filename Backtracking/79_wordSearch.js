/**
 * Problem: 79 https://leetcode.com/problems/word-search/
 */

/**
 * Solution: T=O(N*4^W), N being number of cells in a matix and W as length of a word.
 * 1. Found characters marked or pruned with "#" to avoid character repetition, can be done using hashmap as well.
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  for (let row = 0; row < board.length; row++)
    for (let col = 0; col < board[row].length; col++)
      if (wordSearch(row, col, board, word, 0)) return true;
  return false;
};

var wordSearch = function (row, col, board, word, w) {
  if (w > word.length - 1) {
    return true;
  }

  if (
    row < 0 ||
    col < 0 ||
    row > board.length - 1 ||
    col > board[0].length - 1 ||
    board[row][col] !== word[w] ||
    board[row][col] === "#"
  ) {
    return false;
  }

  board[row][col] = "#";
  let res =
    wordSearch(row + 1, col, board, word, w + 1) ||
    wordSearch(row - 1, col, board, word, w + 1) ||
    wordSearch(row, col + 1, board, word, w + 1) ||
    wordSearch(row, col - 1, board, word, w + 1);

  board[row][col] = word[w];

  return res;
};
