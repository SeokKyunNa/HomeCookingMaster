from flask_restx import fields
from hcmk_server.api.recipe_api import recipe_ns

'''AddLike Models'''

add_like_fields = recipe_ns.model(
    "add_like",
    {
        "result": fields.String,
        "message": fields.String,
    }
)

add_like_expect_fields = recipe_ns.model(
    "add_like_expect",
    {
        "user_id": fields.Integer,
    }
)