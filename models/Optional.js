import { Schema, model } from "mongoose";

const optionalSchema = new Schema(
    {
        type: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

const OptionalModel = new model('optional', optionalSchema)

export {
    OptionalModel
}