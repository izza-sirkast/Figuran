import mongoose from "mongoose";

const {Schema, model, models} = mongoose

const ImageSchema = new Schema({
    title : {
        type : String,
        required : true
    },
    imageBase64 : {
        type : String,
        required : true
    }
}, {timestamps:true})

export default models.Image || model('Image', ImageSchema)