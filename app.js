// SOLUTIONS TO REMEMBER

// TWO NUMBER SUM

let nums = [1, 2, 4, 9]
let target = 13

const twoSum = (nums, target) => {
    const differenceIndex = new Map()
    for(let i = 0; i < nums.length; ++i){
        if(differenceIndex.has(nums[i])){
            return [differenceIndex.get(nums[i]), i]
        }
        const difference = target - nums[i]
        differenceIndex.set(difference, i)
    }
    return differenceIndex
}

console.log(twoSum(nums, target))

// CONTAINS DUPLICATES

let dup = [3, 7, 1, 1]

const contains = (dup) => {
    const set = new Set()
    for(let i = 0; i < dup.length; ++i){
        if(set.has(dup[i])){
            return true
        }
        set.add(dup[i])
    }
    return false
}

console.log(contains(dup))
