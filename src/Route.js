const { Router } = require('express')
const router = Router()

const {
    newVisitor,
    countVisitor
} = require('./controller')

// router.get('/', (req, res) => {
//     res.send("<h1>Hola</h1> " + req.query.name)}) 
//router.post('/', countVisitor)
router.get('/', countVisitor)

module.exports = router