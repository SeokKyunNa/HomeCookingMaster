from flask_restx import fields
from hcmk_server.api.auth_api import auth_ns

signin_data_fields = auth_ns.model(
    "signin_data",
    {   
        "user_id" : fields.Integer,
        "nickname" : fields.String,
    }
)

signin_fields = auth_ns.model(
    "signin",
    {   
        "result" : fields.String,
        "message" : fields.String,
        "data": fields.Nested(signin_data_fields)
    }
)

signin_expect_fields = auth_ns.model(
    "signin_expect",
    {   
        "email" : fields.String,
        "password" : fields.String,
        "nickname" : fields.String,
    }
)
