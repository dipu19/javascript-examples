function swapTwoVariables(num1, num2){
    let sum = num1 + num2
    num1 = sum - num1
    num2 = sum - num2
    console.log("num1 "+num1 + " num2 "+num2)
}
swapTwoVariables(2, 5)