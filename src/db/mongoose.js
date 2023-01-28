const mongoose=require("mongoose");
mongoose.set('strictQuery', true);

mongoose.connect("mongodb://localhost:27017/employer1",{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connect to database");
}).catch(error=>{
    console.log("unable to connect to db"+error);
})

