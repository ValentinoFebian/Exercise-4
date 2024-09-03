// Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02  03
// 04  05  06
// 07  08  09  10

// Parameters : height → triangle height

let triangle = (totalNumber: number) => {
    let sequence: any[] = []
    let rowCurrent = 1
    let counterReset = 0
    for (let i = 1; i <= totalNumber; i++) {
        sequence.push([i])

        counterReset ++

        if (counterReset === rowCurrent) {
            counterReset = 0
            rowCurrent++
            sequence.push(["\n"])
        }
    }
    return sequence

}

console.log(triangle(10));

// Create a function that can loop the number of times according to the input we provide, 
// and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz 

let fizzBuzz = (lastNumber: number) => {
    let sequence: any = [];
    for (let i = 1; i <= lastNumber; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            sequence.push("FizzBuzz")
        } else if (i % 3 === 0) {
            sequence.push("Fizz")
        } else if (i % 5 === 0) {
            sequence.push("Buzz")
        } else {
            sequence.push(i)
        }
    }
    return sequence;
}

console.log(fizzBuzz(15));


// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”z

let bmi = (weight: number, height: number) => {
    let check: number = weight / ((height / 100) * (height / 100))
    if (check > 39.9) {
        return "obesity"
    } else if (check >= 30 && check < 39.9) {
        return "very overweight"
    } else if (check >= 25 && check < 30) {
        return "overweight"
    } else if (check >= 18.5 && check < 25) {
        return "ideal"
    } else if (check < 18.5) {
        return "less weight"
    }
}

console.log(bmi(70, 169));


// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

let myArray = [1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ]


let oddOnly = (arrayNumber: number[]) => {
    let newArray = [];
    for (let i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] % 2 !== 0) {
            newArray.push(arrayNumber[i])
        } 
    }
    return newArray
    
} 

console.log(oddOnly(myArray))


// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

let arrayMaker = (sentence: string) => {
    return sentence.split(' ');
}

console.log(arrayMaker("Hello World"))
