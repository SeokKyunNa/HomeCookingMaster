from flask_restx import fields
from hcmk_server.api.auth_api import auth_ns

login_data_fields = auth_ns.model(
    "data",
    {
        "access_token" : fields.String,
        "refresh_token" : fields.String,
        "user_id" : fields.Integer,
        "nickname" : fields.String,
        "img" : fields.String,
    }
)

login_fields = auth_ns.model(
    "login",
    {
        "result": fields.String,
        "message": fields.String,
        "data": fields.Nested(login_data_fields),
    }
)

login_expect_fields = auth_ns.model(
    "login_expect",
    {
        "email": fields.String,
        "password": fields.String,
    }
)