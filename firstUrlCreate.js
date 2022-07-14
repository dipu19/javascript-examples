import { Console } from 'console'
import http from 'http'

http.createServer((req, res)=>{
    console.log("Jay Jagannath")
    res.write("Jay Jagannath")
    res.end()
}).listen(2200)