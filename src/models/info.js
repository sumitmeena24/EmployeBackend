const mongoose = require("mongoose");

const employerSchema = new mongoose.Schema({
    firstName :{
        type : String
    },
    lastName :{
        type : String
    },
    cellNo :{
        type : String
    },
    emailId :{
        type : String
    },
    salary :{
        type : String
    },
    address :{
        type : String
    }
});

const Employer=mongoose.model('Info',employerSchema);

module.exports=Employer;