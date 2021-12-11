from flask_restx import fields
from hcmk_server.api.auth_api import auth_ns


refresh_data_fields = auth_ns.model(
    "data",
    {
        "access_token" : fields.String,
    }
)

refresh_fields = auth_ns.model(
    "refresh",
    {
        "result": fields.String,
        "message": fields.String,
        "data": fields.Nested(refresh_data_fields),
    }
)

# refresh_expect_fields = auth_ns.model(
#     "refresh_expect",
#     {
#         "email": fields.String,
#         "password": fields.String,
#     }
# )

refresh_expect_fields = auth_ns.model(
    "refresh_expect",
    {
        "refresh_token": fields.String,
    }
)