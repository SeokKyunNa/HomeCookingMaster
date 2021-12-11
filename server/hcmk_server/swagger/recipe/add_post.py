from flask_restx import fields
from hcmk_server.api.recipe_api import recipe_ns
from hcmk_server.swagger.recipe.get_recipe import (
    get_recipe_post_info_fields,
)

'''AddPost Models'''
add_post_data_fields = recipe_ns.model(
    "add_post_data",
    {
        "post_info": fields.List(fields.Nested(get_recipe_post_info_fields)),
    }
)

add_post_fields = recipe_ns.model(
    "add_post",
    {
        "result": fields.String,
        "message": fields.String,
        "data": fields.Nested(add_post_data_fields)
    }
)

add_post_expect_fields = recipe_ns.model(
    "add_post_expect",
    {
        "user_id": fields.Integer,
        "post": fields.String,
        "img": fields.String,
    }
)