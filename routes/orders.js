import e, { Router } from "express";

import {getOrdersAndStatus,getBreadMeatAndOptional, registerOrders, updateStatus} from "../controllers/hamburgerShop.js"
import methodOverride from 'method-override'

const router = Router()

router.use(methodOverride('_method'))

router.get('/', getBreadMeatAndOptional)

router.get('/orders', getOrdersAndStatus)

router.post('/orders', e.urlencoded({ extended: true }), registerOrders)

router.put('/status', e.urlencoded({ extended: true }), updateStatus)

export {
    router
}