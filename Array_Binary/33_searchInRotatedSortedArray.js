/**
 * Problem: 33
 */

/**
 * Solution: T=O(log n) using modified binary search
 * Sample: [4,5,6,7,0,1,2]
 * 1: [mid+1 to end increasing slope]
 * 2: [start to  mid increasing slope]
 */

var search = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};

var binarySearch = function (nums, target, start, end) {
  if (start > end) return -1;

  const mid = start + Math.floor((end - start) / 2);

  if (target === nums[mid]) {
    /* mid equal to target */
    return mid;
  } else if (nums[mid] >= nums[start]) {
    /* mid greater than equal to array left most */
    if (target >= nums[start] && target < nums[mid]) {
      return binarySearch(nums, target, start, mid - 1);
    } else {
      return binarySearch(nums, target, mid + 1, end);
    }
  } else {
    /* mid less than equal to array left most */
    if (target <= nums[end] && target > nums[mid]) {
      return binarySearch(nums, target, mid + 1, end);
    } else {
      return binarySearch(nums, target, start, mid - 1);
    }
  }
};
