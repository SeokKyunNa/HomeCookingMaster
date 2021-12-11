from flask_restx import fields
from hcmk_server.api.mypage_api import mypage_ns

recipe_fields = mypage_ns.model(
    "my_page_liked_recipe",
    {
        "recipe_id": fields.Integer,
        "recipe_name": fields.String,
        "recipe_img" : fields.String,
    }
)

user_info_fields = mypage_ns.model(
    "my_page_user_info",
    {
        "email": fields.String,
        "nickname": fields.String,
        "img": fields.String,
        "intro": fields.String,
        "exp": fields.String,
    }
)

mypage_data_fields = mypage_ns.model(
    "mypage_data",
    {
        "user_info": fields.Nested(user_info_fields),
        "liked_recipe": fields.List(fields.Nested(recipe_fields)),
        "my_post": fields.List(fields.Nested(recipe_fields)),
    }
)

mypage_fields = mypage_ns.model(
    "mypage",
    {
        "result": fields.String,
        "message": fields.String,
        "data": fields.Nested(mypage_data_fields)
    }
)