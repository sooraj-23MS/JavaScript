// Find the Missing Number in an Array

// Multiple
const arr =  [1, 2, 4, 5, 6, 8, 10];
let val =  1
arr.map((ele)=>{
    if((val) != (ele)){
        console.log(val)
        val++;
    }
    val++;
})

// Single
function findMissing(arr){
    const length = arr.length+1;
    const numSet =  new Set(arr)
    for (let i = 1; i <= length; i++) {
       if(!numSet.has(i))
        return i;
    }
}

console.log(findMissing([2, 3, 1, 5]))