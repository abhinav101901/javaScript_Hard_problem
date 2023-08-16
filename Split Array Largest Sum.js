/*Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any 
subarray is minimized. Return the minimized largest sum of the split.
A subarray is a contiguous part of the array.

 */

function splitArray(nums, k) {
    let left = Math.max(...nums);
    let right = nums.reduce((acc, curr) => acc + curr, 0);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let sum = 0;
        let count = 1;

        for (const num of nums) {
            if (sum + num > mid) {
                count++;
                sum = num;
            } else {
                sum += num;
            }
        }

        if (count > k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
}

const nums = [7, 2, 5, 10, 8];
const k = 2;

const result = splitArray(nums, k);
console.log(result); 
