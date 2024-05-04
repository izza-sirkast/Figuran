import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || '')
        console.log('Connected to mongodb local, port : 27017')
    } catch (error) {
        console.log('Failed to connect to mongodb, error:'+error)
    }
}

export default connect