import { Schema, model } from "mongoose";

const ordersSchema = new Schema(
    {
        name: {type: String, required: true},
        meat: {type: String, required: true},
        bread: {type: String, required: true},
        optionals: {type: [String]},
        status: {type: String, default: 'Solicitado'}
    },
    {
        timestamps: true
    }
)

const OrdersModel = new model('orders', ordersSchema)

export {
    OrdersModel
}
