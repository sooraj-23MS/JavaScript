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