// let arr=[1,2,3,4];

// let ans= arr.reduce((acc,currEle)=> acc+currEle,0);
// console.log(ans);

//   currying
// function add (a){
//     return function (b){
//         return function (c){
//             return a+b+c;
//         }
//     }
// }

// console.log(add(1)(2)(3));

//   send email

// function sendMailTo(to){
//     return function (subject){
//         return function (message){
//             console.log(`Sending email to ${to} with subject ${subject} and message ${message}`);
//         }
//     }
// }

// let step1=sendMailTo("rishi");
// let step2=step1("Order Confirmation");
// step2("Your order has been confirmed");

const add = (a) => (b) => (c) => a + b + c;
console.log(add(1)(2)(3));
