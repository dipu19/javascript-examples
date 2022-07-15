import fs from 'fs'

function writeFIntoFile(text){
    fs.writeFileSync("data.txt",text)
}
writeFIntoFile("My name is Jaga")