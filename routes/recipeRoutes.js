const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find()
        res.status(200).json(recipes)
    }
    catch (err) {
        res.status(404).json({ message : err })
    }
})

router.get('/:recipeId', async (req, res) => {
    try {
        const recipe = await Recipe.findById({_id : req.params.recipeId})
        res.status(200).json(recipe)
    }
    catch (err) {
        res.status(400).json({ message : err })
    }
})

router.post('/', async (req, res) => {
    const newRecipe = new Recipe({
        title : req.body.title,
        category : req.body.category,
        food_origin : req.body.food_origin,
        food_type : req.body.food_type,
        image_src : req.body.image_src,
        default_people_number : req.body.default_people_number,
        duration : {
            preparation : {
                duration : req.body.duration.preparation.duration,
                unit : req.body.duration.preparation.unit,
            },
            thermomix : {
                duration : req.body.duration.thermomix.duration,
                unit : req.body.duration.thermomix.unit,
            }
        },
        ingredients : req.body.ingredients,
        nutrition : req.body.nutrition,
        instructions : req.body.instructions,
        tips : req.body.tips
    })
    try {
        const savedRecipe = await newRecipe.save()
        res.status(201).json(savedRecipe)
    }
    catch (err) {
        res.status(400).json({ message : err })
    }
})

router.delete('/:recipeId', async (req, res) => {
    try {
        const deleteRecipe = await Recipe.remove({_id : req.body.recipeId})
        res.status(204).json(deleteRecipe)
    }
    catch (err) {
        res.status(400).json({ message : err })
    }
})

router.patch('/:recipeId', async (req, res) => {
    try {
        const updateRecipe = await Recipe.updateOne({_id : req.body.recipeId}, {$set: {
            title : req.body.title,
            category : req.body.category,
            food_origin : req.body.food_origin,
            food_type : req.body.food_type,
            image_src : req.body.image_src,
            default_people_number : req.body.default_people_number,
            duration : {
                preparation : {
                    duration : req.body.duration.preparation.duration,
                    unit : req.body.duration.preparation.unit,
                },
                thermomix : {
                    duration : req.body.duration.thermomix.duration,
                    unit : req.body.duration.thermomix.unit,
                }
            },
            ingredients : req.body.ingredients,
            nutrition : req.body.nutrition,
            instructions : req.body.instructions,
            tips : req.body.tips
        }})
        res.status(200).json(updateRecipe);
    }
    catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;