//using database as a wraper using promise and async await but in this i use promise with resolve/catch 
const asyncHandler=(requestHandler)=>{
      (req,res,next)=>{
          Promise.resolve(requestHandler(req,res,next)).
          catch((err)=> next(err))
      }
}

export {asyncHandler}

// const asyncHandler=()=>{}
// const asyncHandler=(func)=>()=>{}
// const asyncHandler=(func)=>async()=>{}//using higher order function 


// const asyncHandler=(fn)=>async(req,res,next)=>{
//        try{
//           await fn(res,req,next)
//        }
//        catch(error){
//                 res.status(err.code||500).json({
//                     success:false,
//                     message:err.message
//                 })
//        }
// }
