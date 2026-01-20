
//1: reverse string

function reverseString(str) {
    const reverse = str.split("").reverse().join("");
    return reverse
}

reverseString('hello')


// 2: count vowels

function countVowels (input) {
    const words = input.toLowerCase()
    let count = 0;
for(word of words ) {
    if('aeiou'.includes(word)) {
        count++ ;
    }
    
}
}

countVowels('programming')

//3 Palindrome 

function isPalindrome (input) {
const reverse = input.split("").reverse().join("")
return reverse === input 

}

const value = isPalindrome('vasi') 
console.log(value)


// find max number

function findMaxNumber(arr) {
  let max = arr[0];

  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

const maxValue = findMaxNumber([1, 2, 9 , 6])
console.log(maxValue)