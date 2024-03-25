const MealModel = require('./MealModel')

module.exports.getMeal = async(req, res) =>{
    const myMeal = await MealModel.find()
    res.send(myMeal)
}

module.exports.saveMeal = async (req, res) => {
    const { title } = req.body;
    MealModel.create({ title })
        .then((data) => {
            console.log('Meal added')
            res.send(data); // Send response inside the then block
        })
        .catch((error) => {
            console.error('Error adding meal:', error)
            res.status(500).send('Error adding meal') // Handle error if create fails
        });
};


module.exports.deleteMeal = async (req, res) => {
    try {
        const { _id } = req.body;
        const deletedMeal = await MealModel.findByIdAndDelete(_id);
        if (!deletedMeal) {
            console.log('Meal not found');
            return res.status(404).send('Meal not found')
        }
        console.log('Meal deleted')
        res.send()
    } catch (error) {
        console.error('Error deleting meal', error)
        res.status(500).send('Error deleting')
    }
}