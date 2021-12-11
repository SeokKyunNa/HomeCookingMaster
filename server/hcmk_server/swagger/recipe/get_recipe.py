from flask_restx import fields
from hcmk_server.api.recipe_api import recipe_ns

'''GetRecipe Models'''

get_recipe_recipe_info_fields = recipe_ns.model(
    "get_recipe_recipe_info",
    {
        "id": fields.Integer,
        "name": fields.String,
        "likes": fields.Integer,
        "views": fields.Integer,
        "img": fields.String,
        "servings": fields.String,
        "difficulty": fields.String,
        "cooking_time": fields.String,
        "food_id": fields.Integer,
    }
)

get_recipe_food_info_fields = recipe_ns.model(
    "get_recipe_food_info",
    {
        "id": fields.Integer,
        "name": fields.String,
        "category_l": fields.String,
        "category_m": fields.String,
        "category_s": fields.String,
    }
)

get_recipe_ingredient_info_fields = recipe_ns.model(
    "get_recipe_ingredient_info",
    {
        "id": fields.Integer,
        "name": fields.String,
        "amount": fields.String,
        "recipe_id": fields.Integer,
    }
)

get_recipe_process_info_fields = recipe_ns.model(
    "get_recipe_process_info",
    {
        "id": fields.Integer,
        "recipe": fields.String,
        "step": fields.Integer,
        "img": fields.String,
        "recipe_id": fields.Integer,
    }
)

get_recipe_post_info_fields = recipe_ns.model(
    "get_recipe_post_info",
    {
        "id": fields.Integer,
        "post": fields.String,
        "img": fields.String,
        "timestamp": fields.String,
        "user_id": fields.Integer,
        "nickname": fields.String,
        "profile_img": fields.String,
        "recipe_id": fields.Integer,
    }
)

get_recipe_other_recipes_info_fields = recipe_ns.model(
    "get_recipe_other_recipes_info",
    {
        "id": fields.Integer,
        "name": fields.String,
        "img": fields.String,
        "views": fields.Integer,
        "likes": fields.Integer,
        "servings": fields.String,
        "difficulty": fields.String,
        "cooking_time": fields.String,
        "food_id": fields.Integer,
    }
)

get_recipe_data_fields = recipe_ns.model(
    "get_recipe_data",
    {
        "recipe_info": fields.Nested(get_recipe_recipe_info_fields),
        "food_info": fields.Nested(get_recipe_food_info_fields),
        "ingredient_info": fields.List(fields.Nested(get_recipe_ingredient_info_fields)),
        "process_info": fields.List(fields.Nested(get_recipe_process_info_fields)),
        "post_info": fields.List(fields.Nested(get_recipe_post_info_fields)),
        "other_recipes_info": fields.List(fields.Nested(get_recipe_other_recipes_info_fields)),
        "did_u_liked": fields.Boolean,
    }
)

get_recipe_fields = recipe_ns.model(
    "get_recipe",
    {
        "result": fields.String,
        "message": fields.String,
        "data": fields.Nested(get_recipe_data_fields)
    }
)