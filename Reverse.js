// String
function reverseStrUsingForOF(str) {
    console.log(str)
    let revStr = "";
    for(let char of str){
        revStr = char + revStr;
    }
    return revStr;
}

function reverseStrUsingNormalFor(str){
    console.log(str)
    let revStr ="";
    for (let i = str.length-1;i>=0;i--){
     revStr+=str[i];
    }
    return revStr;
}

function reverseBuiltin(str){
    console.log(str)
    return  str.split("").reverse().join("")
}

function reverseUsingReduce(str){
    console.log(str)
   return str.split("").reduce((acc,curr)=> curr + acc);
    
}

console.log(reverseStrUsingForOF("hello"));
console.log(reverseStrUsingNormalFor("hello"))
console.log(reverseBuiltin("hello"))
console.log(reverseUsingReduce("hello"))


//Number

function reverseNumNormal(number){
    console.log(number)
    let revNum = 0;
    while(number>0){
        let lastDigit = number % 10 ;
        revNum = revNum * 10 + lastDigit;
        number = Math.floor(number/10);
    }
    return revNum;
}

function reverseNum(number){
    console.log(number)
    let num = number.toString();
    let revNum = ""
    for (let N of num){
        revNum = N + revNum;
    }
    return parseInt(revNum)
}

function reverseNumBuiltin(number){
    console.log(number)
    return parseInt(number.toString().split("").reverse().join(""))
}

function reverseNumUsingReduce(number){
    console.log(number)
    return parseInt(number.toString().split("").reduce((acc,curr)=> curr + acc))
}

console.log(reverseNum(5001))
console.log(reverseNumNormal(5002))
console.log(reverseNumBuiltin(5003))
console.log(reverseNumUsingReduce(5004))

//Array of Strings,Number

let StrArr = ["sooraj","siva","thomas"];
let NumArr = [100,200,300];

let RevArr = []
let RevStr = ""
for (str of StrArr){
    RevStr="";
    for(char of str){
        RevStr = char + RevStr;
    }
    RevArr.push(RevStr);
}

let revArrBuiltin = StrArr.map((str)=>{
    return str.split("").reverse().join("")
})

let revNumBuiltin = NumArr.map((num)=>{
    return num.toString().split("").reverse().join("")
})


console.log(RevArr)
console.log(revArrBuiltin)
console.log(revNumBuiltin)

//Reverse an Array

const revArr = [1,2,3,4,5];
let idx = revArr.length-1;
const rev =[]
  while (idx >= 0){
    rev.push(revArr[idx])
    idx--;
  }
console.log(rev)

//Palindrome

function palindrome(string){
    let revStr = '';
    for(let char of string){
        revStr = char + revStr ;
    }
  
    return string == revStr;  

    // if(revStr==string){
    //     return "Its Palindrome"
    // }
    // else{
    //     return "not Palindrome"
    // }
}

console.log(palindrome("malayalam"))
