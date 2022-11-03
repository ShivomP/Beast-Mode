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
    let set = new Set()
    for(let i = 0; i < dup.length; ++i){
        if(set.has(dup[i])){
            return true
        }
        set.add(dup[i])
    }
    return false
}

console.log(contains(dup))

// MAXIMUM SUBARRAY

let numbers = [-2, 1, -3, 4, -1, 2, -5, 0]

const maxSub = (numbers) => {
    let maxSum = numbers[0]
    let sum = 0
    for(let i = 0; i < numbers.length; ++i){
        if(sum < 0){
            sum = 0
        }
        sum += numbers[i]
        if(maxSum < sum){
            maxSum = sum
        }
    }
    return maxSum
}

console.log(maxSub(numbers))

// TWO SORTED SUM

let joke = [1, 3, 4, 5, 7, 11]
let solution = 11

const twoSorted = (joke, solution) => {
    let left = 0
    let right = joke.length - 1
    while(left < right){
        let sum = joke[left] + joke[right]
        if(sum < solution){
            left++
        }
        if(sum > solution){
            right--
        }
        if(sum === solution){
            return [left, right]
        }
    }
}

console.log(twoSorted(joke, solution))

