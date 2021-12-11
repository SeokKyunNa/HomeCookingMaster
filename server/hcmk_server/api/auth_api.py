from flask_restx import Resource, Namespace
from flask import request
from flask_bcrypt import Bcrypt
from flask_jwt_extended import jwt_required

from hcmk_server.services.s3 import (
    boto3_image_upload,
    default_profile_img
)
from hcmk_server.services.auth import (
    login,
    logout,
    refresh,
    signup,
    val_email,
    val_nickname
)

from hcmk_server.swagger.auth.signup import (
    signin_fields,
    signin_expect_fields,
)
from hcmk_server.swagger.auth.validate_email import (
    val_email_fields,
    val_email_expect_fields,
)
from hcmk_server.swagger.auth.validate_email import (
    login_fields,
    login_expect_fields,
)
from hcmk_server.swagger.auth.validate_email import (
    refresh_fields,
    refresh_expect_fields,
)
from hcmk_server.swagger.auth.validate_nickname import (
    val_nickname_fields,
    val_nickname_expect_fields,
)
from hcmk_server.swagger.auth.validate_nickname import (
    logout_fields,
)

auth_ns = Namespace(
    name="auth",
    description="회원정보를 관리하는 API.",
)
bcrypt = Bcrypt()

'''
회원가입 API
'''
@auth_ns.route("/signup")
@auth_ns.response(200, "success")
@auth_ns.response(500, "Failed registration")
class Signup(Resource):
    @auth_ns.expect(signin_expect_fields)
    @auth_ns.marshal_with(signin_fields)
    def post(self):
        """user 테이블에 회원정보를 등록합니다."""  
        user_data = request.form
        email = user_data.get("email")
        password = user_data.get("password") 
        nickname = user_data.get("nickname") 
        
        try:
            img = request.files["img"]
        except Exception:
            pass
        try:
            if img.filename == "":
                image_url = default_profile_img()
            else:
                image_url = boto3_image_upload(img)
        except UnboundLocalError:
            image_url = default_profile_img()

        result = signup(email, password, nickname, image_url)
        return result


'''
이메일 중복 확인 API
'''
@auth_ns.route("/signup/val_email")
@auth_ns.response(200, "success")
class ValidateEmail(Resource):
    @auth_ns.expect(val_email_expect_fields)
    @auth_ns.marshal_with(val_email_fields)
    def post(self):
        """email이 이미 등록이 되어있는지 확인하고 결과를 보내줍니다."""
        user_data = request.json
        email = user_data.get("email")
        result = val_email(email)
        return result

'''
닉네임 중복 확인 API
'''

@auth_ns.route("/signup/val_nickname")
@auth_ns.response(200, "success")
class ValidateEmail(Resource):
    @auth_ns.expect(val_nickname_expect_fields)
    @auth_ns.marshal_with(val_nickname_fields)
    def post(self):
        """닉네임이 이미 등록이 되어있는지 확인하고 결과를 보내줍니다."""
        user_data = request.json
        nickname = user_data.get("nickname")
        result = val_nickname(nickname)
        return result


'''
로그인 API
'''
@auth_ns.route("/login")
@auth_ns.response(200, "success")
class Login(Resource):
    @auth_ns.expect(login_expect_fields)
    @auth_ns.marshal_with(login_fields)
    def post(self):
        """이메일과 비밀번호를 확인하고 JWT를 발급합니다."""
        user_data = request.json
        email = user_data.get("email")
        password = user_data.get("password")
        result = login(email, password)
        return result

@auth_ns.route("/logout")
@auth_ns.response(200, "success")
class Logout(Resource):
    @auth_ns.marshal_with(logout_fields)
    @jwt_required()
    def delete(self):
        """토큰을 확인하고 로그아웃 시킵니다."""
        result = logout()
        return result

@auth_ns.route("/refresh")
@auth_ns.response(200, "success")
@auth_ns.response(404, "fail")
class Refresh(Resource):
    @auth_ns.expect(refresh_expect_fields)
    @auth_ns.marshal_with(refresh_fields)
    def post(self):
        """Refresh 토큰을 받고 새로운 Access 토큰을 발급해줍니다."""
        refresh_token = request.json.get('refresh_token')
        result = refresh(refresh_token)
        return result
        



