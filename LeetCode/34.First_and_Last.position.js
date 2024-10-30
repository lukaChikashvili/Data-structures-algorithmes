/*
Given an array of integers nums sorted in non-decreasing order, 

find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

*/

var searchRange = function(nums, target) {
    function findFirst(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let firstOccurrence = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                firstOccurrence = mid;
                right = mid - 1; 
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return firstOccurrence;
    }

    function findLast(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let lastOccurrence = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                lastOccurrence = mid;
                left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return lastOccurrence;
    }

    let first = findFirst(nums, target);
    if (first === -1) return [-1, -1];

    let last = findLast(nums, target);

    return [first, last];
};



console.log(searchRange([5,7,7,8,8,10], 8));