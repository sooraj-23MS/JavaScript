// Find the Maximum and Minimum in an Array

const minmaxarr = [12,20,5,22,18,11]
console.log(minmaxarr.length)

for (let i=0;i<minmaxarr.length;i++){
  for(let j=0;j<minmaxarr.length-1;j++){
     if(minmaxarr[i]<minmaxarr[j]){
        let temp = minmaxarr[i];
        minmaxarr[i]=minmaxarr[j];
        minmaxarr[j]=temp;
    }
  }
}
console.log(minmaxarr);
console.log("min = "+ minmaxarr[0])
console.log("max = "+ minmaxarr[minmaxarr.length-1])

// Other simple method.

function minmax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let num of arr){
        if(num < min){
            min = num;
        }
        if(num > max){
            max = num
        }
    }
    console.log(arr)
    console.log(`Min in Array ${min} .Max in Array ${max}`)

}
minmax([99, 5, 3, 100, 1])
