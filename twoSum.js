/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const ref = {};

    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i];

        if(ref.hasOwnProperty(complement)){
            return [ref[complement], i]
        }

        ref[nums[i]] = i
    }

    return []
    
};
