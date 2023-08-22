import { Router } from "express";
import { BreadsModel } from "../models/Breads.js";
import { MeatModel } from "../models/Meat.js";
import { OptionalModel } from "../models/Optional.js";
import { StatusModel } from "../models/Status.js";

const router = Router()

router.get('/', async (req, res) => {
    const bread = await BreadsModel.find({})
    const meat = await MeatModel.find({})
    const optional = await OptionalModel.find({})

    res.render('index', {bread, meat, optional})
})

router.get('/request', (req, res) => {
    res.render('request')
})

// criar a rota com metodo http POST e verificar se o nome do cliente pode vir com espaço

export {
    router
}