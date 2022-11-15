// SOLUTIONS TO REMEMBER

// TWO NUMBER SUM

let nums = [1, 2, 4, 9]
let target = 13

const twoSum = (nums, target) => {
    const numMap = new Map()
    for(let i = 0; i < nums.length; ++i){
        if(numMap.has(nums[i])){
            return [numMap.get(nums[i]), i]
        }
        let difference = target - nums[i]
        numMap.set(difference, i)
    }
    return numMap
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
        if(sum > solution){
            right--
        }
        if(sum < solution){
            left++
        }
        if(sum === solution){
            return [left, right]
        }
    }
}

console.log(twoSorted(joke, solution))

// STOCK TRADING

let prices = [1, 6, 3, 20]

const stocks = (prices) => {
    let left = 0
    let right = 1
    let maxProfit = 0
    while(right < prices.length){
        let profit = prices[right] - prices[left]
        if(profit > 0){
            maxProfit = Math.max(maxProfit, profit)
        }
        else left = right
        right++
    }
    return maxProfit
}

console.log(stocks(prices))

// THREE NUMBER SUM

let three = [-1, 0, 1, 2, -1, -4]

const threeSum = (three) => {
    three.sort((a, b) => a - b)
    const results = []
    for(let i = 0; i< three.length; ++i){
        if(three[i] === three[i - 1]){
            continue
        }
        let left = i + 1
        let right = three.length - 1
        while(left < right){
            let sum = three[i] + three[left] + three[right]
            if(sum > 0){
                right--
            }
            if(sum < 0){
                left++
            }
            if(sum === 0){
                results.push([three[i], three[left], three[right]])
                left++
                while(left === left - 1 && left < right){
                    left++
                }
            }
        }
    }
    return results
}

console.log(threeSum(three))

// PRODUCT EXCEPT SELF

let self = [3, 2, 6, 1]

const product = (self) => {
    const results = []
    results[0] = 1
    for(let i = 1; i < self.length; ++i){
        results[i] = results[i - 1] * self[i - 1]
    }
    let right = 1
    for(let i = self.length - 1; i > 0; --i){
        results[i] = results[i] * right
        right *= self[i]
    }

    return results
}

console.log(product(self))

// MEETING TIMES

let times = [[10, 15], [12, 25], [30, 35]]

const meeting = (times) => {
    times.sort((a, b) => a[0] - b[0])
    for(let i = 1; i < times.length; ++i){
        const start = times[i][0]
        const end = times[i - 1][1]
        if(start < end){
            return false
        }
    }
    return true
}

console.log(meeting(times))

// BINARY SEARCH

let search = [1, 2, 4, 9, 12]
let answer = 9

const binary = (search, answer) => {
    let left = 0
    let right = search.length - 1
    while(left < right){
        let mid = Math.floor((left + right) / 2)
        if(search[mid] > answer){
            right = mid - 1
        }
        if(search[mid] < answer){
            left = mid + 1
        }
        else return mid
    }
}

console.log(binary(search, answer))

// MINIMUM ROTATED SORTED ARRAY

let array = [7, 9, 12, 1, 4]

const minimum = (array) => {
    let left = 0
    let right = array.length - 1
    while(left < right){
        let mid = Math.floor((left + right) / 2)
        if(array[mid] > array[right]){
            left = mid + 1
        }
        else right = mid
    }
    return array[left]
}

console.log(minimum(array))

// SEARCH IN ROTATED SORTED ARRAY

let shiv = [8, 9, 1, 2, 3, 4, 5, 6, 7]
let kive = 5

const rotated = (shiv, kive) => {
    let left = 0
    let right = shiv.length - 1
    while (left < right){
        let mid = Math.floor((left + right) / 2)
        if(shiv[mid] === kive){
            return mid
        }
        if(shiv[mid] < shiv[right]){
            if(kive < shiv[mid] || kive > shiv[right]){
                right = mid - 1
            }
            else left = mid + 1
        }
        else{
            if(kive > shiv[mid] || kive < shiv[left]){
                left = mid + 1
            }
            else right = mid - 1
        }
    }
    return "not found"
}

console.log(rotated(shiv, kive))

// CONTAINER WITH MOST WATER

let water = [1, 5, 6, 3, 4, 2]

const container = (water) => {
    let left = 0
    let right = water.length - 1
    let maxArea = 0
    while(left < right){
        let width = right - left
        let height = Math.min(water[left], water[right])
        let area = width * height
        if(water[left] < water[right]){
            left++
        }
        else{
            right--
        }
        if(maxArea < area){
            maxArea = area
        }
    }
    return maxArea
}

console.log(container(water))

// FLATTEN ARRAY

let it = [1, 2, 3, 4, [4, 5, [6, 7]]]

const flatten = (it) => {
    const results = []
    const helper = (it) => {
        for(elem of it){
            if(Array.isArray(elem)){
                helper(elem)
            }
            else{
                results.push(elem)
            }
        }
    }
    helper(it)
    return results
}

console.log(flatten(it))

// MOVE ZEROS

let zeros = [0, 6, 0, 4, 8]

const move = (zeros) => {
    let left = 0
    let right = 1
    while(right < zeros.length){
        if(zeros[right] !== 0){
            let temp = zeros[right]
            zeros[right] = zeros[left]
            zeros[left] = temp
            left++
        }
        right++
    }
    return zeros
}

console.log(move(zeros))

// SUM OF TWO

let nums1 = [1, 2, 3]
let nums2 = [5, 2]
let added = 8

const sumTwo = (nums1, nums2, added) => {
    const set = new Set()
    for(let elem of nums1){
        set.add(added - elem)
    }
    for(let elem of nums2){
        if(set.has(elem)){
            return true
        }
    }
    return false
}

console.log(sumTwo(nums1, nums2, added))