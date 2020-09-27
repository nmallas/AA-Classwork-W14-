var searchInsert = function(nums, target) {
    if(nums[0] > target) return 0;
    for(let i=0; i<nums.length; i++) {
        if(nums[i] === target) return i;
        if(nums[i] < target && nums[i+1] > target) return i + 1;
    }
    return nums.length;
};


var countAndSay = function(n, current="1") {
    if(n === 1) return current;
    next = ""
    while(current) {
        for(let i=0; i<current.length; i++) {
            if(!current[i+1] || current[i+1] != current[0]) {
                next += `${i+1}${current[0]}`
                current = current.slice(i+1)
                break;
            }
        }
    }
    return countAndSay(n-1, next);
};
