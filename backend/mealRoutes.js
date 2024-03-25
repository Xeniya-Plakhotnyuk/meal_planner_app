const { Router } = require('express')
const { getMeal, saveMeal, deleteMeal } = require('./MealController')
const router = Router()

router.get('/', getMeal)
router.post('/saveMeal', saveMeal)
router.delete('/deleteMeal', deleteMeal)

module.exports = router