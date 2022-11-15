let number = 1231
let numberArray= []

function myFunction(number){
    if(number<0){
        console.log("does not match")
    }
    else{
        while(number>0){
            numberArray.push(number%10)
            number = Math.floor(number/10)
            
        }
        let count = 0 
        console.log("numer array--->",Math.floor(numberArray.length/2))
        for(let i =0,j=numberArray.length-1;i<numberArray.length,j>=0;i++,j--){
           console.log("i--"+i+" "+j+"--j")
           if(numberArray[i]===numberArray[j]){
               count = count+1
           }
        }
        if(count === numberArray.length)
        {
            console.log("match")
        }
        else{
            console.log("does not match")
        }
    }
 
}
myFunction(number)