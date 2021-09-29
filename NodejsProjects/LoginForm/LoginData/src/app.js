const express=require('express');
const app=express();
const path=require('path');
const hbs=require('hbs');
const registersh=require('./models/register');
const port=process.env.PORT||3000;
require('./db/conn');
app.use(express.json());
app.use(express.urlencoded({extended:false}));
const pathstatic=path.join(__dirname,'../public');
const temstatic=path.join(__dirname,'../templates/views');
const partialpath=path.join(__dirname,'../templates/partials');
console.log(partialpath);
console.log(temstatic);
console.log(pathstatic);
app.use(express.static(pathstatic));
app.set('views',temstatic);
app.set('view engine',"hbs");
hbs.registerPartials(partialpath);
app.get('/',(req,res)=>{
    res.render("index.hbs");
});
app.get('/register',(req,res)=>{
    res.render("register");
});
app.post('/register',async(req,res)=>{
    try {
         const newreg=new registersh({
             Firstname:req.body.firstname,
             Lastname:req.body.lastname,
             Email:req.body.Email,
             Password:req.body.Password,
             Address:req.body.Address,
             lastname:req.body.lastname,
         });
     const result=await    newreg.save();
        res.status(200).render("index");
    console.log(req.body.firstname);
    console.log(req.body.last);
    console.log(req.body.email);
    console.log(req.body.password);
    console.log(req.body.address);
    
    } catch (error) {
        console.log(error);
    }
})
app.listen(port,()=>{
    console.log(`server is running ...${port}`); 
});