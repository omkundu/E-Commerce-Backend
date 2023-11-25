const ErrorHandler=require("../utils/errorhandler");

module.exports=(err,req,res,next)=>{
       error.statusCode=err.statusCode||500;
       err.message=err.message||"Internal Server Error";

       res.status(err.statusCode).json({
        success:false,
        error:err,
       })
}