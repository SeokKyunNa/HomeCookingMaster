from flask_restx import fields
from hcmk_server.api.auth_api import auth_ns

logout_fields = auth_ns.model(
    "logout",
    {
        "result": fields.String,
        "message": fields.String,
    }
)
