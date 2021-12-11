from flask_restx import fields
from hcmk_server.api.auth_api import auth_ns

val_email_fields = auth_ns.model(
    "validate_email",
    {
        "is_valid": fields.Boolean,
        "message": fields.String,
    }
)

val_email_expect_fields = auth_ns.model(
    "validate_email_expect",
    {
        "email": fields.String,
    }
)
