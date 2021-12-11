from flask_restx import fields
from hcmk_server.api.auth_api import auth_ns

val_nickname_fields = auth_ns.model(
    "validate_nickname",
    {
        "is_valid": fields.Boolean,
        "message": fields.String,
    }
)

val_nickname_expect_fields = auth_ns.model(
    "validate_nickname_expect",
    {
        "nickname": fields.String,
    }
)
