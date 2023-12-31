const Visitor = require('../models/Visitor');

// create
async function create(req,res,next){

    const {device} = req.body;
    const data = {device:device,ip_address:req.socket.remoteAddress,counts:1};

    try {
        
        // add
        const add = await Visitor.create(data);
        
        return res.status(201).json({status:1,msg:"Success",data:add});

    } catch (error) {

        return res.status(200).json({status:2,msg:"Error",error:error});

    }


}

async function getAll(req,res,next) {
    try {
        const result = await Visitor.find({})
        return res.status(200).json({status:1,msg:"success",data:result});
    } catch (error) {
        return res.status(200).json({
            status:0,
            msg:"error",
            error: error
        });
    }
}


module.exports = {create, getAll}