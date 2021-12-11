from flask_restx import fields
from hcmk_server.api.recipe_api import recipe_ns

'''DeletePost Models'''

delete_post_fields = recipe_ns.model(
    "delete_post",
    {
        "result": fields.String,
        "message": fields.String,
    }
)

delete_post_expect_fields = recipe_ns.model(
    "delete_post_expect",
    {
        "post_id": fields.Integer,
    }
)
