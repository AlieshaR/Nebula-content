// // 1.   Declare a for loop that starts at 0, goes until 20, and increments by 1
// //      Each loop it should log to the console the current index
const num1 = []
for(let i = 0; i <21 ; i++){
    console.log(num1)
}
// // 2.   Declare a for loop that starts at 1, goes until 40, and increments by 2
// //      Each loop it should log to the console the current index
for(let i = 1; i<=40 ; i +=2){
    console.log([i])
}

// // 3.   Create an array with all student names in it. 
// //      Loop over the array and log each student's name to the console.
// //      Inside the array declare an unrequired, but useful variable for 'currentStudent'
const studentsNames = ["Aliesha" , "Armani" , "Chanel" , "Juan" , "Odalis", 20]
 for(let i = 0; i<= studentsNames.length; i++){
     let x = studentNames[i]
 } 
console.log(x)

// // 4.   Use the array below for the following question
// //      Loop over the numArray & ONLY log even numbers to the console.
// //      2 Hints: there will be an IF statement within the loop & be sure to check the value, not the index
//         const numArray = [5, 3, 2, 1, 10, 20, 30, 22, 33, 12, 11, 9, 6, 3];
const numArray = [0]
for(let i = 0 ; i < numArray.length ; i++ ) {
           if(`${numArray[i]}`% 2 === 0){
               console.log(`${numArray[i]}`)
           }
        }

// // 5.   Use the above numArray array for this question
// //      Create a for loop which will iterate over each element of the above numArray and output a new array of only odd numbers
const oddNum = [1]
for(let i=0;i<oddNum.length; i++){
        if(`!(${oddNum[i]}`%2 ===0){
              oddnums.push(`${numArray[i]}`)
        }
}
console.log(oddNum[i]);
// 6.   Using the numArray and the two empty placeholder arrays below
//      Create a for loop which will fill the two separate arrays, one with only positive numbers, one with only negative numbers

const numArray = [5, 3, 2, -1, 10, 20, 30, -22, 33, 12, 11, 9, 6, -3];
const positiveArr = [];
const negativeArr = [];
for(let i = 0; i <numArray.length ; i++){
    if(numArray[i]<0){"numArray.push"}
    } else(numArray[i>0]){numArray.push}
// I tried my best but this is all I could do as far as if or else

