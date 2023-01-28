const dbConnect=require('../db/mongoose');
const express=require('express');
const infoModel=require('../models/info');
const router =new express.Router();
const mongodb=require('mongoose');


router.get('/',async(req,res) =>{
    try{
const info=await infoModel.find();
res.json(info);
    }catch(error){
        res.status(500).send(error);
    }
});


router.post('/',async(req,res) =>{
const info=new infoModel({
    firstName:req.body.firstName,
    lastName:req.body.lastName,
    cellNo:req.body.cellNo,
    emailId:req.body.emailId,
    salary:req.body.salary,
    address:req.body.address
});
try{
    const a=await info.save()
    res.json(a);
    }catch(error){
    res.status(500).send(error);
    }
});


router.patch('/',async(req,res)=>{
    try{
        const data=await infoModel.findById(req.body._id)
        data.firstName=req.body.firstName
        data.lastName=req.body.lastName
        data.cellNo=req.body.cellNo
        data.emailId=req.body.emailId
        data.salary=req.body.salary
        data.address=req.body.address
        const a=await data.save()
        res.json(a);
        }catch(error){
        res.status(500).send(error);
        }
})


router.delete('/',async(req,res)=>{
    try{
        const data=await dbConnect();
        const a=await data.deleteOne({_id:new mongodb.ObjectId(req.params._id)})
        res.json(a);
        }catch(error){
        res.status(500).send(error);
        }
})

module.exports=router;