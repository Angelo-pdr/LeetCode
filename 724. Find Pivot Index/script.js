var pivotIndex = function(nums) {
    let leftsum = 0
    let num = nums.reduce((acumulado, atual) => acumulado + atual, 0)
    for(let i = 0; i < nums.length; i++){
        if(num - leftsum - nums[i] === leftsum){
            console.log(i)
           return  i
        }
        leftsum += nums[i]
        
    }
    return -1
}