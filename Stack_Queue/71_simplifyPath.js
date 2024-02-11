/**
 * Problem: 71 https://leetcode.com/problems/simplify-path/
 */

/**
 * Solution: T=O(N)
 * 1. Stack problem
 * 2. Split original string separated by "/"
 * 3. Ignore if "empty" or "."
 * 4. Push pathname
 * 5. Pop if ".."
 */

/**
 * @param {string} path
 * @return {string}
 */

var simplifyPath = function (path) {
  path = path.split("/");
  const stack = [];

  for (let i = 0; i < path.length; i++) {
    if (path[i] == "" || path[i] == ".") continue;
    else if (path[i] == "..") stack.pop();
    else stack.push(path[i]);
  }

  return "/" + stack.join("/");
};
