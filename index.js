//-------------------------01-Personalized Greeting-------------------------//
// let name = prompt("Enter your name: ");
// let age = Number(prompt("Enter your age: "));
// console.log(`Hello ${name}! You are ${age} years old and you were born around ${2026 - age}`);

//-------------------------02-Currency Converter-------------------------//
// let amount = Number(prompt("Enter amount you want to converte: "));
// console.log(`${amount} EGP = $${(amount / 47.22).toFixed(2)} USD, €${(amount / 54.35).toFixed(2)} EUR, £${(amount / 61.95).toFixed(2)} GBP`);

//-------------------------03-Even or Odd Checker-------------------------//
// let num = Number(prompt("enter a number: "));
// if (num % 2 === 0) console.log(`${num} is an even number`);
// else console.log(`${num} is an odd number`);

//-------------------------04-Time of Day Greeting-------------------------//
// let hour = Number(prompt('enter an hour: '));
// if (hour < 12) console.log("good morning!");
// else if (hour < 18) console.log("good afternoon!");
// else console.log("good evening!");

//-------------------------05-Average Score Calculator-------------------------//
// let score1 = Number(prompt("enter the first subject score: "));
// let score2 = Number(prompt("enter the second subject score: "));
// let score3 = Number(prompt("enter the third subject score: "));
// let avg = (score1 + score2 + score3) / 3;
// if (avg >= 50) console.log(`Average: ${avg.toFixed(2)}, status: pass`);
// else console.log(`Average: ${avg.toFixed(2)}, status: fail`);

//-------------------------06-Simple Calculator-------------------------//
// let num1 = Number(prompt("enter first number: "));
// let num2 = Number(prompt("enter second number: "));
// let operator = prompt("enter the operator: ");
// let result;
// if (operator === "+") result = num1 + num2;
// if (operator === "-") result = num1 - num2;
// if (operator === "*") result = num1 * num2;
// if (operator === "/") result = num1 / num2;
// console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`);

//-------------------------07-Multiplication Table-------------------------//
// let num = Number(prompt("enter a number: "));
// console.log(`${num} x 1 = ${num * 1}\n${num} x 2 = ${num * 2}\n${num} x 3 = ${num * 3}\n${num} x 4 = ${num * 4}\n${num} x 5 = ${num * 5}\n${num} x 6 = ${num * 6}\n${num} x 7 = ${num * 7}\n${num} x 8 = ${num * 8}\n${num} x 9 = ${num * 9}\n${num} x 10 = ${num * 10}\n`);

//-------------------------08-Even Numbers Printer-------------------------//
// for (let i = 2; i <= 10; i += 2) console.log(i);

//-------------------------09-Factorial Calculator-------------------------//
// let result = 1;
// for (let i = 5; i >= 1; i--) result *= i;

// console.log(result);

//-------------------------10-Smallest Integer Finder-------------------------//
// let n = 0;
// while (n * n <= 50) n++;
// console.log(n);

//-------------------------11-Value Swapper-------------------------//
// let num1 = Number(prompt("enter the first number: ")); //1
// let num2 = Number(prompt("enter the second number: ")); //2
// num1 = num1 + num2; //3
// num2 = num1 - num2; //1
// num1 = num1 - num2; //2
// console.log(`After Swapping: num1=${num1}, num2=${num2}`);

//-------------------------12-Movie Access Checker-------------------------//
// let age = Number(prompt("enter your age: "));
// let hasTicket = prompt("do you have a ticket? (yes/no)");
// if (age >= 18 || hasTicket === "yes") console.log("Access granted: true");
// else console.log("Access granted: false");

//-------------------------13-Largest Number Finder-------------------------//
// let a = Number(prompt("enter the first number: ")); //3
// let b = Number(prompt("enter the second number: ")); //2
// let c = Number(prompt("enter the third number: ")); //1
// if (a > b) {
//   if (a > c)
//     console.log(`Largest number is: ${a}`); // a < c
//   else console.log(`Largest number is: ${c}`);
// }
// else {
//   if (b > c)
//     console.log(`Largest number is: ${b}`); //b < c
//   else console.log(`Largest number is: ${c}`);
// }

//-------------------------14-Salary Calculator-------------------------//
// let hours = Number(prompt("Enter hours worked:"));
// let rate = Number(prompt("Enter hourly rate:"));
// let regular = 0;
// let overtime = 0;
// if (hours > 40) {
//   regular = 40 * rate;
//   overtime = (hours - 40) * rate * 1.5;
// } else regular = hours * rate;
// console.log(`Regular: $${regular}, Overtime: $${overtime}, Total: $${regular + overtime}`);

//-------------------------15-BMI Calculator-------------------------//
// let w = parseFloat(prompt("enter your weight in kg: "));
// let h = parseFloat(prompt("enter your height in m: "));
// let BMI = w / (h * h);
// let category = "";
// if (BMI < 18.5) category = "Underweight";
// else if (BMI >= 18.5 || BMI < 25) category = "Normal weight";
// else if (BMI >= 25 || BMI < 30) category = "Overweight";
// else category = "Obese";
// console.log(`BMI: ${BMI.toFixed(2)} - ${category}`);

//-------------------------16-Shopping Cart Total-------------------------//
// let amount = Number(prompt("enter purchase amount: "));
// let tax = amount * 0.1;
// let discount = 0;
// if (amount > 100) discount = amount * 0.05;
// console.log(`Subtotal: $${amount}, Tax: $${tax}, Discount: $${discount}, Final: $${amount + tax - discount}`);

//-------------------------17-ATM Simulator-------------------------//
// let operation = Number(prompt("enter the operation (1:Balance, 2:Withdraw, 3:Deposit)"));
// let amount = Number(prompt("enter the amount: "));
// let currentBalance = Number(prompt("enter your current balance: "));
// let newBalance = 0;
// if (operation === 1) console.log(`Your balance is: $${currentBalance}`);
// else if (operation === 2) {
//   newBalance = currentBalance - amount;
//   console.log(`Withdrew $${amount}. New balance: $${newBalance}`);
// } else {
//   newBalance = currentBalance + amount;
//   console.log(`Deposited $${amount}. New balance: $${newBalance}`);
// }

//-------------------------18-FizzBuzz-------------------------//
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else if (i % 5 === 0) console.log("Buzz");
//   else console.log(i);
// }

//-------------------------19-Star Pattern Printer-------------------------//
// let rows = Number(prompt("enter the number of rows: "));
// for (let i = 1; i <= rows; i++) {
//   let result = "";
//   for (let j = 1; j <= i; j++) {
//     result += "*";
//   }
//   console.log(`${result}\n`);
// }

//-------------------------20-Right Triangle Pattern Printer-------------------------//
// let rows = Number(prompt("enter the number of rows: "));
// for (let i = 1; i <= rows; i++) {
//   let result = "";
//   for (let j = rows - i; j >= 0; j--) {
//     //print spaces
//     result += " ";
//   }
//   for (let x = 1; x <= i; x++) {
//     //print stars
//     result += "*";
//   }
//   console.log(`${result}\n`);
// }
