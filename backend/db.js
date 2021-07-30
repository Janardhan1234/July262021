const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://vayuz:vayuz1234@test.fa4qf.mongodb.net/Test?retryWrites=true&w=majority`,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log('database connected.')
    }
})