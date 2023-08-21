import { Schema, model } from "mongoose";

const meatSchema = new Schema(
    {
        type: {type: String, required: true}
    },
    {
        timestamps: true
    }
)

const MeatModel = new model('meat', meatSchema)

export {
    MeatModel
}