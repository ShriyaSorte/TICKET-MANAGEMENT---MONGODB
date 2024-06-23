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

});

module.exports = mongoose.model('Ticket',ticket);

// {
//     "tickettype" : "Bugs",
//     "ticketstatus" : "Open",
//     "tickettitle" : "UI bug",
//     "ticketdescription" : "Bug in user interface",
//     "ticketduedate" : "2024-07-01T00:00:00.000Z",
//     "ticketattachment" : [
//         {
//             "filename": "screenshot.png",
//             "type": "image/png"
//         },
//         {
//             "filename": "error.log",
//             "type": "text/plain"
//         }
//     ],
//     "ticketallocatedid" : "12345",
//     "ticketremark" : [
//         {
//             "userid": "67890",
//             "remark": "Initial report",
//             "date": "2024-06-23T12:00:00.000Z"
//         },
//         {
//             "userid": "54321",
//             "remark": "Assigned to developer",
//             "date": "2024-06-24T08:00:00.000Z"
//         }
//     ]
// }