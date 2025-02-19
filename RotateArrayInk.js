// Rotate an Array to the Right by K Steps

const arr = [1, 2, 3, 4, 5];
const step = 2;

for(let i = 0; i<step;i++){
    let temp = arr[arr.length-1];
    for(let j = arr.length-1 ; j >=0 ;j--){
        arr[j]=arr[j-1]
        if(j==0){
            arr[j]=temp;
        }
    }
}
console.log(arr)