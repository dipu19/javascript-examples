


var nums  = [1,1,1,2,2,3,3,4,5,5]
var num = []


var removeDuplicates = function(nums) {
    let num = []
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<=i+1;j++){
            if(nums[i]!==nums[j]){
                num.push(nums[i])
            }        
        }
    }
    nums= num
    return nums
}
//removeDuplicates(nums)
console.log(removeDuplicates(nums))