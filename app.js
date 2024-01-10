const express=require("express")
const app = express()
app.get('/',(req,res)=>{
   if(!error)
   {
    app.send('error connecting')
   }
   else{
    app.send("coonected sucefully")
   }
}).listen(4000)