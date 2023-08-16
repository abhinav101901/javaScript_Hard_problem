/*You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the 
array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one
position.

Return the max sliding window.*/

function maxSlidingWindow(nums, k) {
    const res = [];
    let l = 0;
    let r = 0;
    const q = [];

    while (r < nums.length) {
        while (q.length > 0 && nums[r] > nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(r);
        if (l > q[0]) {
            q.shift();
        }
        if (r + 1 >= k) {
            res.push(nums[q[0]]);
            l++;
        }
        r++;
    }
    return res;   
};

let nums = [1,3,-1,-3,5,3,6,7]
let k = 3

console.log(maxSlidingWindow(nums,k))