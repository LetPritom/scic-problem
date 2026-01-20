
//1: reverse string

function reverseString(str) {
    const reverse = str.split("").reverse().join("");
    return reverse
}



const revCheck = reverseString('hello')
console.log(revCheck)


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


// 4: find max number

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

//5: remove duplicate function 

function removeDuplicate (arr) {
    let result = [] ;

    for(i of arr) {
        if(!result.includes(i))
            result.push(i);
    }

    return result;
}

const check = removeDuplicate([1,2,1,3,3,3,4,1])
console.log(check)


// 6 sum function 

function sumArr(arr) {
  let sum = 0;

  for (let num of arr) {
    sum = sum + num;
  }

  return sum;
}

const total = sumArr([1,2,5,87,4,6])
console.log(total)


// 7 even number of array 

function evenNumbersOfArray(array) {
    const result = []

    for( even of array) {
        if(even % 2===0) {
            result.push(even)
        }
    }

    return result

}

const pushEve =  evenNumbersOfArray([2,4,5,6,47,52])
console.log(pushEve)


// 8 factorial number

function factorialCalculation(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

const fact = factorialCalculation(10);
console.log(fact)


// ping pong print 

function pingPongPrint(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

const ping = pingPongPrint(20)
console.log(20)


