const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    uname : {type:String, required:true},
    uemail : {type:String, required:true},
    umobile : {type:Number, required:true},
    ugender : {type:String, required:true},
    uage : {type:Number, required:true},
    udesignation : {type:String, required:true},
    utype : {type:String, required:true},
    upassword : {type:String, required:true},
    uisdeleted : {type:String, required:true},
    ucreatedby : {type:String, required:true},
    umodifiedby : {type:String, required:true},
    ucreatedat : {type:Date, required:true},
    umodifiedat : {type:Date, required:true}
});


module.exports = mongoose.model('User',userSchema);
