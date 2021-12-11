from flask import request
from flask_restx import Resource, Namespace
from flask_jwt_extended import jwt_required
from hcmk_server.services.mypage import (
    get_mypage,
    edit_img
)
from hcmk_server.swagger.mypage.edit_img import (
    mypage_fields,
)
from hcmk_server.swagger.mypage.mypage import (
    edit_img_fields,
    edit_img_expect_fields,
)

mypage_ns = Namespace(
    name="mypage",
    description="마이페이지 관련 API.",
)

@mypage_ns.route('')
@mypage_ns.response(200, "Success")
@mypage_ns.response(401, "Fail")
class Mypage(Resource):

    @mypage_ns.marshal_with(mypage_fields)
    @jwt_required()
    def get(self):
        """마이페이지에서 유저 정보, 스크랩한 레시피 리스트, 작성한 포스트의 레시피 리스트 보내주는 API"""
        result = get_mypage()
        return result


@mypage_ns.route('/editimg')
@mypage_ns.response(200, "success")
@mypage_ns.response(500, "Failed")
class EditImg(Resource):
    @mypage_ns.expect(edit_img_expect_fields)
    @mypage_ns.marshal_with(edit_img_fields)
    def post(self):
        """사용자의 프로필 사진을 수정하는 api"""
        user_id = request.form.get("user_id")
        try:
            img = request.files["img"]
        except Exception:
            # img = None
            pass
        result = edit_img(user_id, img)
        return result