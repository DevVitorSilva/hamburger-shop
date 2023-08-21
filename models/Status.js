import { Schema, model } from "mongoose";

const statusSchema = new Schema(
    {
        type: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

const StatusModel = new model('status', statusSchema)

export {
    StatusModel
}