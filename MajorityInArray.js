// Find the Majority Element in an Array

// Input: [3, 3, 4, 2, 3, 3, 3]

function returnMajority(arr){
    let checked = [];
    let major = null;
    let MaxCount = 0;
    let count = 0;
    arr.forEach((ele) => {
        if(!checked.includes(ele)) {
            checked.push(ele)
        }  
    });
    console.log(checked)
    for (let i = 0; i< checked.length; i++) {
        count = 0;
        for (let j = 0; j < arr.length; j++) {
            if(checked[i]==arr[j]){
                count++;
            }
        }
if(count>MaxCount){
    MaxCount = count ;
    major = checked[i];
}

    }
    console.log(`Majority Element: ${major}, Count: ${MaxCount}`);

}

returnMajority([3, 3, 4, 2, 3, 3, 3]);