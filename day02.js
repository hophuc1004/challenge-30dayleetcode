// Strings**
/**Bai 1: Valid Palindrome (#125) */

const string = "A man, a plan, canal: Panama"

const handleCheckValidPalindrome = (str) => {
  const alphaNumericRegExp = /[a-zA-Z0-9]/;
  let startIdx = 0;
  let endIdex = str?.length - 1
  while (startIdx < endIdex) {

    console.log('!alphaNumericRegExp.test(str[startIdx]):', !alphaNumericRegExp.test(str[startIdx]))
    if (!alphaNumericRegExp.test(str[startIdx])) {
      startIdx++;
    }

    else if (!alphaNumericRegExp.test(str[endIdex])) {
      endIdex--;
    }

    else if (str[startIdx].toLowerCase() !== str[endIdex].toLowerCase()) {
      return false
    }
    else {
      startIdx++;
      endIdex--
    }
  }

  return true
}

// const result = handleCheckValidPalindrome(string)

/**Bai 2: Longest Common Prefix (#14) */

const arrayItems = ["flower", "flow", "flight"]
const handleFindLongestCommon = (array) => {
  const shortestItem = array.reduce((minLength, currentString) => {
    return Math.min(minLength, currentString.length)

  }, Infinity)

  for (let i = shortestItem; i > 0; i--) {
    const currentPrefix = array[0].substring(0, i);
    console.log('currentPrefix:', currentPrefix)

    if (array.every(string => string.startsWith(currentPrefix))) {
      return currentPrefix
    }

  }

  return ''
}

// const result = handleFindLongestCommon(arrayItems)

/**Bai 3: Group Anagrams (#49) */

const arrayAnagrams = ["bat", "tab", "eat", "tea", "tan", "nat"]

const handleGroupAnagrams = (array) => {
  const anagramsAnagrams = new Map()
  for (const str of array) {

    const elementSorted = str?.split('').sort().join('')
    console.log('elementSorted:', elementSorted)

    if (!anagramsAnagrams.has(elementSorted)) {
      anagramsAnagrams.set(elementSorted, [])
    }

    anagramsAnagrams.get(elementSorted).push(str)
  }

  return Array.from(anagramsAnagrams.values())
}

// const result = handleGroupAnagrams(arrayAnagrams)