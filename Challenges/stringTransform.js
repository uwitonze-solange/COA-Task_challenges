const reverseString = (string) => {
    return string.split('').reverse().join('')
 }
 
 const convertToAscii = (string) => {
     return string.split('').map((x) => x.charCodeAt(0)).join(' ')
 }
 
 const inputString = prompt('Enter any string: ')
 if(inputString.length % 3 === 0 && inputString.length % 5 === 0){
     console.log("Reversed:" + reverseString(inputString))
     console.log("Replaced:" + convertToAscii(inputString))
 }
 else if(inputString.length % 3 === 0) {
     console.log("result:" + reverseString(inputString))
 }
 else if(inputString.length % 5 === 0) {
     console.log("result:" + convertToAscii(inputString))
 }
 else{
     console.log("result: " + inputString)
 }