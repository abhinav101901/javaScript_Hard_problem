/* Given two integers n and k, return the kth lexicographically smallest integer in the range [1, n].*/ 

function countSteps(n, prefix) {
    let steps = 0;
    let current = prefix;
    let next = prefix + 1;

    while (current <= n) {
        steps += Math.min(n + 1, next) - current;
        current *= 10;
        next *= 10;
    }

    return steps;
}

function findKthLexicographicallySmallest(n, k) {
    let current = 1;
    k--;

    while (k > 0) {
        const steps = countSteps(n, current);
        if (steps <= k) {
            current++;
            k -= steps;
        } else {
            current *= 10;
            k--;
        }
    }

    return current;
}

// Example usage
const n = 1;
const k = 1;
const result = findKthLexicographicallySmallest(n, k);
console.log(`The ${k}th lexicographically smallest integer in the range [1, ${n}] is: ${result}`);
