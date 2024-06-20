const mongoose = require('mongoose');

const ticket = mongoose.Schema({
    tickettype:{type:String, required:true},
    ticketstatus:{type:String, required:true},
    tickettitle:{type:String, required:true},
    ticketdescription:{type:String, required:true},
    ticketduedate:{type:Date, required:true},
    ticketattachment:[
        {
            "filename":{
                type:String,
                required:true
            },
            "type":{
                type:String,
                required:true
            }
        }
    ],
    ticketallocatedid:{type:String, required:true},
    ticketremark:[
        {
            "userid":{
                type:String,
                required:true
            },
            "remark":{
                type:String,
                required:true
            },
            "date":{
                type:Date,
                required:true
            }
        }
    ]

})

module.exports = mongoose.model('Ticket',ticket);