/*
Q8) Write a function to find repeated sum of digits until there is only a single digit in the number.
Example - 456 - 4+5+6 = 15 - 1+5 = 6.
*/

function findSingleDigitSum(num) {
 while (num >= 10) {
   let sum = 0;
   while (num > 0) {
     sum += num % 10;
     console.log('sum:',sum)
     num = Math.floor(num / 10);
     console.log("num",num)
   }
   num = sum;
 }
 return num;
}

const number = 456;
const result = findSingleDigitSum(number);
console.log("Result:", result);


/*
Output:

sum: 6
num 45
sum: 11
num 4
sum: 15
num 0
sum: 5
num 1
sum: 6
num 0
Result: 6

*/
