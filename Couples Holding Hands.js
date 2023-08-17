/*
There are n couples sitting in 2n seats arranged in a row and want to hold hands.The people and seats are represented by 
an integer array row where row[i] is the ID of the person sitting in the ith seat. The couples are numbered in order, 
the first couple being (0, 1), the second couple being (2, 3), and so on with the last couple being (2n - 2, 2n - 1).
Return the minimum number of swaps so that every couple is sitting side by side. A swap consists of choosing any two 
people, then they stand up and switch seats.
*/ 

/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    const n = row.length / 2;
    const graph = new Array(n).fill(null).map(() => []);
    const visited = new Array(n).fill(false);
    
    for (let i = 0; i < row.length; i += 2) {
        const person1 = Math.floor(row[i] / 2);
        const person2 = Math.floor(row[i + 1] / 2);
        graph[person1].push(person2);
        graph[person2].push(person1);
    }
    
    let swaps = 0;
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            let cycleSize = 0;
            let node = i;
            
            while (!visited[node]) {
                visited[node] = true;
                cycleSize++;
                const neighbor = graph[node][0];
                node = neighbor;
            }
            
            swaps += cycleSize - 1;
        }
    }
    
    return swaps;
};

// Example usage
const row = [0, 2, 1, 3];
console.log(minSwapsCouples(row)); 
