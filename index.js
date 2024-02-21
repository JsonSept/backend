import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import productsRouter from './routes/products.js'
config();

const PORT = process.env.PORT
const app = express();
app.use(cors({
    origin: 'http://localhost:8080',
    credentials:true
}))
app.use(express.json())
app.use(express.static('../frontend/src/views/ProductView.vue'))
app.use(express.static('../frontend/src/views/ItemView.vue'))
app.use('/products',productsRouter)
app.use('/id',productsRouter)

app.listen(PORT, ()=>{
    console.log('http://localhost:'+ PORT);
})