from flask_restx import fields
from hcmk_server.api.main_api import main_ns

today_ranking_data_fields = main_ns.model(
    "today_ranking_data",
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

today_ranking_fields = main_ns.model(
    "today_ranking",
    {
        "result": fields.String,
        "message": fields.String,
        "data": fields.List(fields.Nested(today_ranking_data_fields))
    }
)