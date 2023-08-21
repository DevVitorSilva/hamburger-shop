import { Schema, model } from "mongoose";

const breadsSchema = new Schema(
    {
        type: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

const BreadsModel = new model('breads', breadsSchema)

export {
    BreadsModel
}