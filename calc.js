import fs from 'fs';

const data = fs.readFileSync('data.txt', 'utf-8').toLowerCase();

const elementCount = (arr) => arr.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});

const factorial = (num) => num > 1n ? factorial(num - 1n) * num : num;

const calculateFraction = (n1, n2, precision) => {
   let dividend = BigInt(n1), divisor = BigInt(n2), quotient = "";

   for (let i = 0; i < precision; i++) {
      dividend *= BigInt(10);
      let digit = Number(dividend / divisor);
      quotient += digit;
      dividend -= BigInt(digit) * divisor;
   }

   return "0." + quotient;
}

const calc = () => {
    const elems = elementCount((data.split("\n")).sort());
    let correctPerms = 1;
    for (let e in elems) correctPerms *= elems[e];
    return calculateFraction(BigInt(correctPerms), factorial(26n), 100)
}
console.log(calc())