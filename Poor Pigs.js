/* There are buckets buckets of liquid, where exactly one of the buckets is poisonous. To figure out which one is poisonous, you feed some number of (poor) pigs the liquid to see whether they will die or not. Unfortunately, you only have minutesToTest minutes to determine which bucket is poisonous.

You can feed the pigs according to these steps:

Choose some live pigs to feed.
For each pig, choose which buckets to feed it. The pig will consume all the chosen buckets simultaneously and will take no time. Each pig can feed from any number of buckets, and each bucket can be fed from by any number of pigs.
Wait for minutesToDie minutes. You may not feed any other pigs during this time.
After minutesToDie minutes have passed, any pigs that have been fed the poisonous bucket will die, and all others will survive.
Repeat this process until you run out of time.
Given buckets, minutesToDie, and minutesToTest, return the minimum number of pigs n*/


function poorPigs(buckets, minutesToDie, minutesToTest) {
   
    let max_time = minutesToTest / minutesToDie + 1;
    let req_pigs = 0;
    while (Math.pow(max_time, req_pigs) < buckets)
        ++req_pigs;
    return req_pigs;
};

let buckets = 4, minutesToDie = 15, minutesToTest = 30

console.log(poorPigs(buckets, minutesToDie, minutesToTest))