/**
 * Leetcode: https://leetcode.com/problems/minimum-genetic-mutation/description/
 * Similar problems: Word Ladder 1,2 https://leetcode.com/problems/word-ladder/description/, https://leetcode.com/problems/word-ladder-ii/description/
 */

/**
 * Solution 1:
 * T=O(N*L*4), where N=size of bank, Lth character of gene string, 4 as constant of possible mutation.
 * S=O(N)
 *
 * 1. It is like graph problem where each mutation into next with a different
 *    character is nothing but each valid gene string is a node.
 * 2. An edge exists between two nodes if they differ by exactly one character and the resulting string is in the bank.
 * 3. To avoid cycles, we hash given bank for visited/used tracking
 * 4. Apply BFS to get shortest distance betwen startGene and endGene.
 * 5. Since problem specifically asks for minimum number of mutations from start to end, we don't have to perform DFS to figure out all the minimum mutations.
 * 6. Treat each character as mutable
 * 7. Generate new string after mutation one character, check if new mutation string is present in the bank to allow mutation.
 * 8. If allowed, push into current mutation is next item in the queue
 * 9. And delete used string from the given bank to avoid cycle
 * 10. If currGene being processed is same as endGene, we reached with shortest mutations, return mutation count
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  const set = new Set(bank);
  const genes = ["A", "C", "G", "T"];

  const queue = [[startGene, 0]];
  let index = 0;

  while (index < queue.length) {
    const [currGene, seq] = queue[index++];

    if (currGene === endGene) return seq;

    const geneArr = currGene.split("");

    for (let i = 0; i < geneArr.length; i++) {
      const original = geneArr[i];
      for (const char of genes) {
        geneArr[i] = char;
        const geneStr = geneArr.join("");
        if (set.has(geneStr)) {
          queue.push([geneStr, seq + 1]);
          set.delete(geneStr);
        }
      }
      geneArr[i] = original;
    }
  }

  return -1;
};
