/*
You are given an integer array arr. We split arr into some number of chunks (i.e., partitions), and individually sort each
chunk. After concatenating them, the result should equal the sorted array. Return the largest number of chunks we can make to sort the array.
*/
function maxChunksToSorted(arr) {
    const sorter = [...arr].sort((a, b) => a - b)
   
   let a = 0, b = 0, count = 0;
    
   for (let i in arr) {
       a += arr[i];
       b += sorter[i];
       
       if (a == b) {
         count += 1;
         a = 0;
         b = 0;
       }
   }
   return count;
};

let arr = [5,4,3,2,1]
console.log(maxChunksToSorted(arr))