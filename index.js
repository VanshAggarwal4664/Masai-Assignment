const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findEven(nums){
  for(let i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        console.log("this is even number",nums[i])
    }
  }
}