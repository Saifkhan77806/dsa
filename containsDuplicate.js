/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const mySet = new Set();

    for(const item of nums){
        if(mySet.has(item)) return true;

        mySet.add(item);
    }

    return false;
};
