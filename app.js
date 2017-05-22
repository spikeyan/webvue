/**
 * Created by A11150421050193 on 2017/4/18.
 */
const express =require('express');

const app=express();
app.use(express.static('./www'))
app.get('/',function(req,res){
    res.send('')
});

app.listen(1026);
console.log('listening on port 1026')