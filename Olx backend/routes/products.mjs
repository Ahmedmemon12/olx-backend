import express from 'express'
import Products from '../models/Products.mjs'

const router = express.Router()

router.get('/', async (req, res) => {
    const products = await Products.find()
    res.send({ message: 'Products fetched successfully', data: products })
})
router.get('/:id', async (req, res) => {
    const products = await Products.findOne()
    res.send({ message: 'Products fetched successfully', data: products })
})
router.get('/', async (req, res) => {
    const products = await Products.find()
    res.send({ message: 'Products fetched successfully', data: products })
})

router.post('/post', async (req, res) => {
    try {
        const product = new Products(req.body)
        await product.save()

        res.send({ message: 'Product posted successfully' })
    }
    catch (e) {
        res.send({ message: e.message })
    }
})

export default router