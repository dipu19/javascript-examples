import fs from 'fs'
let dirPath = ''

function crudWithFile(){
    //create file in the same directory with file name intro
    fs.writeFileSync(`${dirPath}intro.txt`,'my name is Jagannath')

    //read file from the intro file
    fs.readFile(`${dirPath}intro.txt`,'utf-8',(err, item)=>{
        if(! err){
            console.log("item from the file ",item)
        }
    })

    //update file using append
    fs.appendFile(`${dirPath}intro.txt`,' AND MY NAME IS JAGANNATH',(err)=>{
        if(!err){
            console.log("file updated")
        }
    })

    //delete file
    fs.unlinkSync(`${dirPath}intro.txt`)
}
crudWithFile()