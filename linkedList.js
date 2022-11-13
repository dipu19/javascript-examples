import { LineType } from "aspose.cells"

function myfunction(){
    function finalNumber1(number){
        let numbers = []
        let duplicateNumber = number
        let result = 0
        while(duplicateNumber !==0){
            numbers.push(duplicateNumber%10)
            duplicateNumber = Math.floor(duplicateNumber/10)
        }
        let count = numbers.length-1
        for(let i =0;i<numbers.length;i++){
            result = result+(numbers[i]*Math.pow(10,count))
            count = count-1
        }
        return result
    }
    let list = [1,1,2,3]
    let anotherList = [1,9,2]
    if(list.length === anotherList.length){
        let firstNumber = 0
        let secondNumber = 0
        let firstCount = list.length-1
        for(let i = 0;i<list.length;i++)
        {
            firstNumber = firstNumber+(list[i]*Math.pow(10,i))
            secondNumber = secondNumber+(anotherList[i]*Math.pow(10,firstCount))
        }
        console.log(firstNumber+secondNumber)
    }
    else{
        let firstNumber = 0
        let secondNumber = 0
        let firstCount = list.length-1
        let secondCount = anotherList.length-1
        for(let i = 0;i<list.length;i++)
        {
            firstNumber = firstNumber+(list[i]*Math.pow(10,firstCount))
            firstCount = firstCount-1
        }
        for(let i = 0;i<anotherList.length;i++)
        {
            secondNumber = secondNumber+(anotherList[i]*Math.pow(10,secondCount))
            secondCount  = secondCount-1
        }
        let finalNumber = firstNumber+secondNumber
        console.log(finalNumber)
        console.log(finalNumber1(1315))

    }
}

myfunction()