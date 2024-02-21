import express from 'express'
import {getProduct,getProductID} from '../models/database.js'
import controller from '../controller/products.js'
const router = express.Router()

router 
    .route('/')
            .get(controller.getProds)

router
    .route('/:id')
            .get(controller.getProdID)

export default router