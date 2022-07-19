let waitingResult = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('got the result')
    },2000)
})
waitingResult.then((result)=>{console.log("found ", result)})