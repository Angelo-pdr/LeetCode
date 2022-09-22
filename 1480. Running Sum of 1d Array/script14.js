
var runningSum = function (nums) {
    
    let result = []
    let acumulador =0;
    for(let i = 0 ; i < nums.length; i++){
        acumulador += nums[i]
        result[i] = acumulador
    }
    return(result)
}
