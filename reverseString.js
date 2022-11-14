let s = " my name is  Jagannath "
function reverseString(){
    let splitArray = s.split(' ')
    let finalString = ''
    let length = splitArray.length
    for(let i = length-1;i>=0;i--){
       if(splitArray[i] === ''){
         splitArray.splice(i,1)
       }
    }
    let newSplitLength = splitArray.length
    for(let i =newSplitLength-1;i>=0;i--){
        if(i !== 0){
            finalString = finalString+splitArray[i]+' '
        }
        else{
            finalString = finalString+splitArray[i]
        }
    }
    return finalString
}
console.log('----'+reverseString()+'----')


