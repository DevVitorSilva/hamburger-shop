import e, { Router } from "express";
import { BreadsModel } from "../models/Breads.js";
import { MeatModel } from "../models/Meat.js";
import { OptionalModel } from "../models/Optional.js";
import { StatusModel } from "../models/Status.js";
import { OrdersModel } from "../models/Orders.js";
import methodOverride from 'method-override'

const router = Router()

router.use(methodOverride('_method'))

router.get('/', async (req, res) => {
    try {
        const bread = await BreadsModel.find({})
        const meat = await MeatModel.find({})
        const optionals = await OptionalModel.find({})

        res.status(200).render('index', { bread, meat, optionals })
    } catch (error) {
        console.log(error)
        res.status(500).send(`
        <div>
            <h1>500 - Internal server error</h1>
            <h2>Oops! Ocorreu um erro!</h2>
            <h2>Fique tranquilo, estamos cientes e trabalhando na correção.</h2>
        </div>
        `)
    }
})

router.get('/orders', async (req, res) => {
    const orders = await OrdersModel.find({})
    const status = await StatusModel.find({})

    res.render('orders', { orders, status })
})

router.post('/orders', e.urlencoded({ extended: true }), async (req, res) => {

    const { name, bread, meat, optionals } = req.body

    if (!name) {
        return res.status(412).send('Name não pode ser vazio.')
    } else if (!bread) {
        return res.status(412).send('Bread não pode ser vazio.')
    } else if (!meat) {
        return res.status(412).send('Meat não pode ser vazio.')
    }

    const orders = new OrdersModel({ name, bread, meat, optionals})

    await orders.save()

    res.status(201).redirect('/')
})

router.put('/status', e.urlencoded({ extended: true }), async (req, res) => {

    try {
        const { _id, status } = req.body
        const teste = await OrdersModel.findByIdAndUpdate({_id}, {status}, {new: true, upsert: true}).lean()

        console.log(status);
        res.redirect('/orders')
    } catch (error) {
        console.log(error)
        res.send('error')
    }
})

export {
    router
}