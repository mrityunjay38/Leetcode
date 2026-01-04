/**
 * Leetcode problem: https://leetcode.com/problems/flood-fill/description/
 */

/**
 * Solution1: BFS, T=O(m * n), S=O(m * n)
 * 1. Start from source pixel
 * 2. update current pixel if within boundary of the image m * n
 * 3. move in up/down/right/left directions if source pixel color matches horizontal and vertical neighbours into queue
 * 4. return modified image matrix
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const m = image.length,
    n = image[0].length;
  const sourceColor = image[sr][sc];

  if (sourceColor === color) return image;

  const queue = [[sr, sc]];
  let index = 0;

  while (index < queue.length) {
    const [r, c] = queue[index++];

    if (r < 0 || r >= m || c < 0 || c >= n || image[r][c] !== sourceColor) {
      continue;
    }

    image[r][c] = color;

    // below lines can be improved by first checking for the matching color of source pixel in that direction, else don't push
    // up
    queue.push([r - 1, c]);
    // down
    queue.push([r + 1, c]);
    // right
    queue.push([r, c + 1]);
    // left
    queue.push([r, c - 1]);
  }

  return image;
};

/**
 * Solution2: DFS, T=O(m * n), S=O(m * n) recursion stack
 * 1. Start from source pixel
 * 2. update current pixel if within boundary of the image m * n
 * 3. move in up/down/right/left directions if source pixel color matches horizontal and vertical neighbours
 * 4. return modified image matrix
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  const m = image.length,
    n = image[0].length;
  const sourceColor = image[sr][sc];

  function dfsFill(r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || image[r][c] !== sourceColor) {
      return;
    }

    image[r][c] = color;

    //down
    dfsFill(r + 1, c);
    //up
    dfsFill(r - 1, c);
    //right
    dfsFill(r, c + 1);
    //left
    dfsFill(r, c - 1);
  }

  if (sourceColor === color) return image;
  dfsFill(sr, sc);
  return image;
};
