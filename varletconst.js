// -----------  Var  -----------

var x ;
 x = 10;
console.log('x = '+x);

{
    var y = 20;
    console.log('y = '+y)  // not block scope. 
}
console.log('y = '+y);

function xyz()
{
    var z = 30;         // function scope.
    console.log('z = '+z)
}
xyz();
// console.log('z = '+z); 
//--  Uncaught ReferenceError: z is not defined.

var zyx = 10;
var zyx = 20; // multiple declaration possible.
zyx = 40;     // updation possible.
console.log('zyx = '+zyx);

// -----------  Let  -----------

let u ;
u = 10;
console.log('\n'+'u = '+u);

{
    let v = 20;
    console.log('v = '+v);  // block scope.
}
// console.log('v = '+v);  
//--  Uncaught ReferenceError: v is not defined.

function uvw(){
    let w = 30;
    console.log('w ='+w); 
}
uvw();
// console.log('w ='+w); 
//-- Uncaught ReferenceError: w is not defined.

let wvu = 10;
// let wvu = 20;   
// multiple declaration not possible.
// -- Identifier 'wvu' has already been declared. 
wvu = 40;   // updation possible
console.log('wvu = '+wvu);

// -----------  Const  -----------

// const i;
// i = 10;                  // one of the major diff.
// console.log('i = '+i);
// -- Missing initializer in const declaration. 
// A const variable must be assigned a value at the time it is declared.

const i = 10;
console.log('\n'+'i = '+i);

{
    const j = 20;
    console.log('j = '+j);   // block scope.
}
// console.log('j ='+j);
// Uncaught ReferenceError: j is not defined.

function ijk(){
    let k = 30;
    console.log('k = '+k); 
}
ijk();
// console.log('k ='+k); 
// Uncaught ReferenceError: k is not defined.

 const kji = 40;
//  const kji = 30;
// -- Identifier 'kji' has already been declared.
// kji = 20;                         
// -- Uncaught TypeError: Assignment to constant variable.
// updation not possible.
 console.log('kji = '+kji);
