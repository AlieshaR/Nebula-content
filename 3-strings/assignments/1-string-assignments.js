/*
https://github.com/Nebula-Academy/SEV8-Curriculum/blob/main/2-JavaScript-Basics/1-data-types-variables/3-strings/strings-assignments/1-string.assignment.js (*_*)UPDATE THIS LINK(*_*)

Push your code to github, reply with a link:
Steps:
`git add .`
`git commit -m"MESSAGE"`
`git push`
POST LINK

*/
 
// For each exercise you'll want to log the result to the console to check your work

// 1. Concatenate "hello" with "goodbye"
"hello" + "goodbye"
console.log(`hello goodbye`)
 
// 2. Save the substring "Friend" from the string "Hello Friend"
console.log("Friend")

// 3. Using 5 or more of the following words, create a template literal that makes a legible sentence.
//    Do not create your own words, use the existing ones below!
const word1 = "hello"; 
const word2 = "horror";
const word3 = "peace";
const word4 = "world"
const word5 = "dislike"; 
const word6 = "umbrella"; 
const word7 = "car"; 
const word8 = "pasta"; 
const word9 = "pizza"; 
const word10 = "movies";
const word11 = "football"; 
const word12 = "soccer"; 
const word13 = "eat"; 
const word14 = "cookie"; 
const word15 = "favorite";
const word16 = "makeup"; 
const word17 = "I"; 
const word18 = "to"; 
const word19 = "my";
const word20 = "is";
const word21 = "and";
const word22 = "also";
const word23 = "like"; 

console.log(`${word17  +  word23  +  word8  +  word21  +  word11}`)

// 4. Given the string of your full name get your initials.
const alph ="abcdefghijklmnopqrstuvwxyz";

 const letterA =alph[0] ;
 const letterR =alph[17]

 console.log(letterA + letterR)

// 5. Get the 5th character from the following string: 'Hello World'
const letter5 =alph[14]

console.log(letter5)
// 6. Find the index of the dash from 'Coding-Time!'
const Time = "Coding-Time"
console.log(Time.indexOf("-"))

// 7. Write code to grab the final letter from a any string.
const word24 = "like"
const lastChar = word24[word24.length-1]
console.log(lastChar)

// 8. Write code to grab the first 3 letters from a string. 
const word25 = "like"
console.log(word25[0], word25[1], word25[2])
// 9. Turn the following string into an array of words: 'This-is-a-sentence';
let splitString = 'This is a sentence'
let splitStringToArr = splitString.split(' ')
console.log(splitStringToArr)
// 10. Make the string of 12 from the following two numbers:
let one = 1;
let two = 2;
console.log(`${one}${two}`)
// Bonus Given the string of ANY first and last name get the 
// initials. 
const fLname = "Aliesha Redmond"
console.log(fLname[0],fLname[8])
// This code needs to be dynamic, no matter the length of the names this code should work.
  // Ex: 
    // Brad Pitt: BP
    // Buzz Lightyear: BL 
    // Rick Grimes: RG
    let ftName ="Daja"
    let ltName = "Mitchner"
    console.log(ftName[0],ltName[0])