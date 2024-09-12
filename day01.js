/**Bai 1: Two Sum (#1) */

const array1 = [2, 5, 3, 6, 7]
const numberTarget = 9

const handleGetTwoSum = (array, target) => {
  const objSet = new Set()
  const objNormal = {}

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const remaining = target - element

    if (objSet.has(remaining)) {
      return [objNormal[remaining], i]
    } else {
      objSet.add(element)
      objNormal[element] = i
    }

  }
}

// const result = handleGetTwoSum(array1, numberTarget)

/**Bai 2:  Best Time to Buy and Sell Stock (#121)*/

const arrPrices = [7, 10, 1, 3, 6, 9, 2]

const handleGetBestTime1 = (array) => {
  let currentBuy = array[0]
  let currentProfit = 0

  for (let i = 1; i < array.length; i++) {
    const element = array[i];

    currentBuy = Math.min(currentBuy, element)
    console.log('currentBuy:', currentBuy)

    currentProfit = Math.max(currentProfit, element - currentBuy)
  }

  return {
    currentBuy,
    currentProfit
  }
}

// const result = handleGetBestTime1(arrPrices)

const handleGetBestTime = (arrPrices) => {
  let profit = 0;
  let buyValue = arrPrices[0]

  for (let i = 1; i < arrPrices.length; i++) {
    const element = arrPrices[i];

    // find price to best buy (find lowest value)
    buyValue = Math.min(buyValue, element)

    // find profit between lowest price and highest price
    profit = Math.max(profit, element - buyValue)

  }

  return {
    buyValue,
    profit

  }
}

// const result = handleGetBestTime(arrPrices)

/**Bai 3:  Maximum Subarray (#53)*/

const arrayNumber = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

const handleGetMaximumSubArray = (array) => {
  let currentSum = array[0]
  let maxSum = array[0]

  for (let i = 1; i < array.length; i++) {
    const element = array[i];

    currentSum = Math.max(currentSum, 0) + element
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum
}

// const result = handleGetMaximumSubArray(arrayNumber)

const handleGetMaximumSubArrayAndSubArray = (array) => {
  let currentSum = array[0]
  let maxSum = array[0]
  let start = 0
  let tempStart = 0
  let end = 0

  for (let i = 1; i < array.length; i++) {
    const element = array[i];

    if (currentSum < 0) {
      currentSum = element
      tempStart = i
    } else {
      currentSum += element
    }

    if (currentSum > maxSum) {
      maxSum = currentSum
      start = tempStart
      end = i + 1
    }

  }

  return {
    subArray: array.slice(start, end),
    maxSum
  }
}

// const result = handleGetMaximumSubArrayAndSubArray(arrayNumber)

/**Bai 4: Remove duplicate number */

const arrayDuplicate = [0, 0, 1, 1, 2, 2, 3, 3, 4]

const handleRemoveDuplicate1 = (array) => {
  return [...new Set(array)]
}

// const result = handleRemoveDuplicate1(arrayDuplicate)
// console.log('result:', result)

const handleRemoveDuplicate2 = (array) => {

  const seen = {}
  const arrayRemove = []

  for (let num of array) {
    console.log('num:', num)
    if (!seen[num]) {
      seen[num] = true
      arrayRemove.push(num)
    }
  }
  return arrayRemove
}

const result = handleRemoveDuplicate2(arrayDuplicate)
console.log('result:', result)
