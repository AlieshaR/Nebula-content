// // 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'
let it = 0;
for(let it = 0 ; it <= 30 ; it ++){
    console.log('the current index is' + it);
}

// // 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index
for(let i = 1; i<=10; i+=2){
    console.log('the current index is' + i)
}

// // 3.   Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.
const celebNames = ['Heath Ledger' , 'Paul Walker' , 'Johnny Depp' , 'Erykah Badu'] 

console.log(celebNames)

// 4.   Loop over your celebrity list and 
//      If a celebrity's full name has an even number of characters log it to the console
//const hollyWood = ['Heath Ledger' , 'Paul Walker' , 'Johnny Depp' , 'Erykah Badu' , 'Robin Thick'] 
//for(let i = 0; i<hollyWood.length; i++){
  //  if(`${hollyWood[i]}`% 2 == 0){
   //console.log(`${hollyWood[i]}`)
 //}
//}

// 5.   Use your celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only first names
//const firstNames = []
//for(let i=0; i<celebNames.length; i++){
  //  for(h=0; h<celebs[i].length; h++){
    //    firstNames.push([h]);

  //  }
//} 
//console.log(firstNames[h]);

//for(let i = 0; i < celebs.length; i++){
    
    //firstNames.push(celebs[i].split(""))
//}
// 6.   Use your celebrity array for this question
//      Create a for loop which will output two separate arrays, one with only initials, one with only last names
//const celebNames = ['Heath Ledger' , 'Paul Walker' , 'Johnny Depp' , 'Erykah Badu' , 'India Arie']
//let initials = []
//let names = []

//for(let i = 0; i<celebNames.length; i++){
   // let spNames = celebsNames[i].split('')
   // names.push(spNames);
   // }

   // const lNames = []
   // for(let i = 0; i<celebsNames.length; i++){
      //  lNames.push(celebsNames[i])
  //  }

// 7.   Loop over the celebrity list and then loop through each name. 
//      If a letter is a vowel, log it to the console



// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console

// // 9.   Convert your celebrity array to all caps and no spaces:
// //      Ex:
// //        Input:  ['Martha Stewart', 'David Beckham', etc..] 
// //        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]

// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop

//BONUS:
//      Write a loop that iterates from zero until 30
//      If an index is divisible by 2 log 'fizz'
//      If an index is divisible by 3 log 'buzz'
//      If an index is divisible by both 2 & 3, log 'fizz-buzz'
//      Otherwise print the index to the console

// this assignment was difficult I would like to reveiw and practice more