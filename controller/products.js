import {getProduct,getProductID} from '../models/database.js'

export default {
    getProds : async(req,res)=>{
        res.send(await getProduct())
    },
    getProdID : async(req,res)=>{
        res.send(await getProductID(+req.params.id))
    }
}