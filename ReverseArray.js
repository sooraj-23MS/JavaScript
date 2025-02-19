//Reverse an Array

const revArr = [1,2,3,4,5];
let idx = revArr.length-1;
const rev =[]
  while (idx >= 0){
    rev.push(revArr[idx])
    idx--;
  }
console.log(rev)
