function example (){
  return new Promise(function(resolve, reject){
    const error = false
    if(error){
      console.log("eroor occured")
      reject();
    }
    else{
      console.log("sucessfull")
      setTimeout(()=>{console.log("inside time out function ")},5000)
      resolve()
    }
  })
}
example().then(()=>console.log("inside resolve")).catch(()=>console.log("inside reject"))