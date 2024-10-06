const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findEven(nums){
  for(let i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        console.log("this is even number",nums[i])
    }
  }
}


function findOdd(nums){
    for(let i=0;i<nums.length;i++){
      if(nums[i]%2!=0){
          console.log("this is odd number",nums[i])
      }
    }
  }


let n=5;
function patternPrint(n){
    for(let i=0;i<n;i++){
        let bag="";
        for(let j=0;j<n;j++){
            bag+="*"+" ";
        }
        
        console.log(bag);
    }

}

findEven(nums);
findOdd(nums);
patternPrint(n);