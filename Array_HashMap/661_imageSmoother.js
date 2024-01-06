/**
 * Problem: 661 https://leetcode.com/problems/image-smoother/
 */

/**
 * Solution: T = O(m * n), 3x3 fixed scanner to generate sum of valid neighbours only.
 */

/**
 * @param {number[][]} img
 * @return {number[][]}
 */

var imageSmoother = function (img) {
  const smooth = [];

  for (let i = 0; i < img.length; i++)
    for (let j = 0; j < img[i].length; j++) {
      if (smooth[i] === undefined) smooth[i] = [];
      smooth[i][j] = img[i][j];
    }

  for (let i = 0; i < img.length; i++)
    for (let j = 0; j < img[i].length; j++) {
      let sum = 0;
      let count = 0;

      for (let x = i - 1; x <= i + 1; x++)
        for (let y = j - 1; y <= j + 1; y++)
          if (x >= 0 && x < img.length && y >= 0 && y < img[i].length) {
            sum += img[x][y];
            count += 1;
          }

      smooth[i][j] = Math.floor(sum / count);
    }

  return smooth;
};
