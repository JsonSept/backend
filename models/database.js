import mysql from 'mysql2'
import {config} from 'dotenv'
config()

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
}).promise()

const getProduct = async()=>{
    const [result] = await pool.query(`
        SELECT *
        FROM products
    `)
    return result
}

const getProductID = async(product_ID)=>{
    const [result] = await pool.query(`
        SELECT *
        FROM products
        WHERE product_ID = ?
    `,[product_ID])
    return result
}

export {getProduct,getProductID}