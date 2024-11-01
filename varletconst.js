// // var

// console.log(x);      // decalre anywhere in the fn.
// var x = 10;

// // let 

// // console.log(y);   // decalre before use.
// // let y = 01;


// // var

// function getname(){
//         console.log(fname);
//         var fname="marvel";    // support multiple declaration
//         fname="marvel";
//         var fname;
//         var fname;
// }

// getname();

// // let 

// // function getName(){
// //     console.log(fname);       // only one declaration in a scope
// //     let fname;
// //     fname="marvel";
// //     let fname;
// // }

// // getName();

// // var 

// var x = 10;
// console.log(x);
// {
//     var x = 20;         // function scope
//     console.log(x);
// }
// console.log(x);


// // let 

// let y = 10;
// console.log(y);
// {
//     let y = 20;
//     console.log(y);    // block scope
// }
// console.log(y);

//  y = 30;
//  console.log(y);    // can be updated not redeclare

// // const

// //  const z;  // must be intialized

// const z = 10;
// console.log(z);

// z = 20;          // cannot update or redeclare
// console.log(z);

// var d = 10;
// {
//     var d=20;
//     console.log("inside "+d);
// }
// console.log("outside "+d);


// function f(){
   
//     var ft = 1;
//     console.log("inside "+ft);
// }
// // console.log("outside "+ft);

// f();


// let x=10;
// {
//     {
//         let y=20;
//     console.log(y);
//     }
//     // console.log(y);

// }
// console.log(x);


// function tt(){
//     if(true){
//         var x = 10;
//         console.log(x)
//     }
//     console.log(x);
// }
// tt();

const x = {
    pro1:10,
    pro2:20
}
console.log(x)

x.pro3=30;

console.log(x);
 x={d1:9,
    d2:20
 }
 console.log(x)