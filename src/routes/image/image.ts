import express from 'express';

const image = express.Router()

image.get('/', (req, res) => {
    res.send('<h3>Image Route</h3>')
})
export default image


