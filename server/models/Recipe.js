const mongoose = require('mongoose');

const RecipeModel = mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    category : {
        type: String,
        required: true,
    },
    food_origin : {
        type: String,
        required: true,
    },
    food_type : {
        type : String,
        required: true,
    },
    image_src : String,
    default_people_number : Number,
    duration : {
        preparation : {
            duration : {
                type : Number,
                required: true,
            },
            unit : {
                type : String,
                required: true,
            }
        },
        thermomix : {
            duration : {
                type : Number,
                required: true,
            },
            unit : {
                type : String,
                required: true,
            }
        }
    },
    ingredients : [
        {
            ingredient_name : String,
            ingredient_quantity : Number,
            ingredient_quatity_unit : String
        }
    ],
    nutrition : [
        {
            nutriment_name : String,
            nutriment_quantity : Number,
            nutriment_quatity_unit : String
        }
    ],
    instructions : [String],
    tips : [String]
})


module.exports = mongoose.model('recipes', RecipeModel)