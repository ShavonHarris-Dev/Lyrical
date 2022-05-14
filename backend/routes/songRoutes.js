const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message:"Get Songs"})
})

router.post('/', (req, res) => {
    res.status(200).json({ message: 'Upload New Songs'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update Songs ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete Songs ${req.params.id}`})
})


module.exports = router