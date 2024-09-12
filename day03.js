// Hashing**
/**Bai 1: Contains Duplicate (#217) */

const arrayDuplicate = [1, 3, 4, 2]

const handleArrayDuplicate = (array) => {
  const newSetArray = new Set(array)
  return array.length !== newSetArray.size
}

// const result = handleArrayDuplicate(arrayDuplicate)


/**Bai 2: Two Sum II (#167) */

const arrayNumber = [1, 2, 4, 4, 6]
const target = 9

const handleTwoSum = (array, target) => {
  let startIdx = 0
  let endIdx = array.length - 1

  while (startIdx < endIdx) {
    console.log('startIdx:', startIdx)
    const currentSum = array[startIdx] + array[endIdx]
    console.log('currentSum:', currentSum)
    if (currentSum == target) {
      return [startIdx, endIdx]
    }

    if (currentSum > target) {
      endIdx--
    } else {
      startIdx++
    }
  }

  return []
}

// const result = handleTwoSum(arrayNumber, 9)

/**Bai 3: Subarray Sum Equals K (#560) */

const arrayNum = [3, 4, -1, 2, 1]
const targetSumArray = 5

const handleSubarraySumEqualsK = (array, target) => {
  const counterMap = new Map()
  counterMap.set(0, 1)
  let totalCount = 0
  let currentSum = 0

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    currentSum += element


    counterMap.set(currentSum, 1)


    /*
    3 - 5 = -2
    console.log('counterMap:', counterMap)
    6 - 5 = 1
    8 - 5 = 3
    9 - 5 = 4
    
    */

    console.log('counterMap:', counterMap)
    console.log('currentSum:', currentSum)
    // const targetMinusElement = target - element

    // if (counterMap.has(targetMinusElement)) {
    //   ans++
    // } else {
    //   counterMap.set(targetMinusElement)
    // }

  }

  // return ans
}

const result = handleSubarraySumEqualsK(arrayNum, targetSumArray)
console.log('result:', result)
