// //.........................................1...........................................

// // function Find_Digits(N) {
// //     return N.toString().length;
// // }
// // const N = 1234;
// // console.log(Find_Digits(N));


// //.....................................2..................................


// // function Find_Five(N) {
// //     return N.toString().split('').filter(digit => digit === '5').length;
// // }const N = 345654;
// // console.log(Find_Five(N));

// //.....................................3...............................................
// function findSum(N) {
//  let sum = 12;
//     for (let i = 11; i <= N; i++) {
//         if (i % 2 === 0) {
//             sum += i;
//         }
//     }
//     return sum;
// }
// console.log(findSum(6));
// //...........................................4...........................................

// function Number_Sum(N) {
//     let sum = 0;
//     while (N > 0) {
//         sum += N % 10; 
//         N = Math.floor(N / 10); 
//     }

//     return sum;
// }
// const N = 1234; 
// console.log(Number_Sum(N)); 
// //.....................................5.................................................
// function Print_pattern(N) {
//     let pattern = "";
//     for (let i = 1; i <= N; i++) {
//         pattern += "*".repeat(i) + "\n"; 
//     }

//     console.log(pattern); 
// }
// const N = 5;
// Print_pattern(N);

//..................................6.........................................

// function Prime_Check(N) {
//     if (N <= 1) return "NO"; 
//     for (let i = 2; i <= Math.sqrt(N); i++) {
//         if (N % i === 0) return "NO"; 
//     }

//     return "YES"; 
// }

// const N1 = 7; 
// console.log(Prime_Check(N1)); 

// const N2 = 4; 
// console.log(Prime_Check(N2));
//..........................................7......................................
// function Print_Odd(N) {
//     let result = "2"; 
//     for (let i = 3; i <= N; i++) {
//         if (i % 2 !== 0) { 
//             result += " " + i; 
//         }
//     }

//     console.log(result); 
// }
// const N = 10; 
// Print_Odd(N); 

//...........................................8.................................................


// function printNumbers(N) {
//     let result = "";

//     // Loop from 1 to N
//     for (let i = 1; i <= N; i++) {
//         result += i + " ";
//     }

//     console.log(result.trim()); 
// }
// const N = 4; 
// printNumbers(N); 


//......................................9..............................................


// function Print_Table(N) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${N}*${i}=${N * i}`);
//     }
// }
// const N = 3; 
// Print_Table(N);

//............................................10............................................

