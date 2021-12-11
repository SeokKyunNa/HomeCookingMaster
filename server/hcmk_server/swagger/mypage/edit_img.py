from flask_restx import fields
from hcmk_server.api.mypage_api import mypage_ns

'''EditImg Models'''
edit_img_data_fields = mypage_ns.model(
    "edit_img_data",
    {
        "img": fields.String,
    }
)

edit_img_fields = mypage_ns.model(
    "edit_img",
    {
        "result": fields.String,
        "message": fields.String,
        "data": fields.Nested(edit_img_data_fields)
    }
)

edit_img_expect_fields = mypage_ns.model(
    "edit_img_expect",
    {
        "user_id": fields.Integer,
    }
)
