// Create a variable for each aspect of an address 
// First Name, Last Name, House-Number, Street-Name, City, State, Zip
// Combine them to be usable as a postage address

/*
First-Name Last-Name Const fName = "Aliesha" lName = "Redmond"
console.log(fname lname)
House-Number, Street-Name Const hNum = "157" sName = "Hickory"
console.log(hNum sName)
City, State const city ="Mastic" state = "NY"
console.log(city state)
Zip const zip = "11951"
console.log(zip)

Your log should look like this:

Steve Rogers
569, Amsterdam Ave
New York, NY
18062 
*/

const address = `${fName} ${lName} 
${houseNum}, ${street}
${city}, ${state}
${zip}`

