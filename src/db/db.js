import mongoose from "mongoose";
import{DB_NAME} from "../constants.js";

const connectDB=async () =>{
          try{
                    const connectionIstance=await mongoose.connect(`${process.env.MongoDb_URL}/${DB_NAME}`)
                    console.log(`\n MongoDb Connected !! DB HOST:${connectionIstance.connection.host}`);
          }
          catch(error){
               console.log("MongoDb connection Error:",error);
               process.exit(1)
          }
}
export default connectDB
