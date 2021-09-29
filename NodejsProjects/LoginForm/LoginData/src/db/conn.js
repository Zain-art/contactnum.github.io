const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/RegisterationLogin',{
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:true,
useUnifiedTopology:true
}
).then(()=>{
    console.log("database is very successfully connected ...");
}).catch((e)=>{
    console.log("no connection created ...");
}); 