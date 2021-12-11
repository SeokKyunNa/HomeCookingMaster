from flask import request
from flask_restx import Resource, Namespace

from hcmk_server.services.s3 import (
    boto3_image_upload,
)
from hcmk_server.services.recipe import (
    get_recipe,
    check_like,
    add_post,
    delete_post,
)

from hcmk_server.swagger.recipe.get_recipe import (
    get_recipe_fields,
)
from hcmk_server.swagger.recipe.add_like import (
    add_like_fields,
    add_like_expect_fields,
)
from hcmk_server.swagger.recipe.add_post import (
    add_post_fields,
    add_post_expect_fields,
)
from hcmk_server.swagger.recipe.add_post import (
    delete_post_fields,
    delete_post_expect_fields,
)

recipe_ns = Namespace(
    name="recipe",
    description="레시피 페이지를 관리하는 API.",
)

@recipe_ns.route('/<int:recipe_id>')
@recipe_ns.response(200, "success")
@recipe_ns.response(500, "Failed")
class GetRecipe(Resource):
    @recipe_ns.marshal_with(get_recipe_fields)
    def post(self, recipe_id):
        """검색어와 일치하는 음식의 레시피 조회수 증가 후 데이터를 반환하는 api"""
        user_id = request.json.get("user_id")
        result = get_recipe(recipe_id, user_id)
        
        return result

@recipe_ns.route('/<int:recipe_id>/like')
@recipe_ns.response(200, "success")
@recipe_ns.response(500, "Failed")
class AddLike(Resource):
    @recipe_ns.expect(add_like_expect_fields)
    @recipe_ns.marshal_with(add_like_fields)
    def post(self, recipe_id):
        """해당 레시피의 좋아요를 관리하는 api"""
        user_id = request.json.get("user_id")
        result = check_like(recipe_id, user_id)
        return result

@recipe_ns.route('/<int:recipe_id>/post')
@recipe_ns.response(200, "success")
@recipe_ns.response(500, "Failed")
class AddPost(Resource):
    @recipe_ns.expect(add_post_expect_fields)
    @recipe_ns.marshal_with(add_post_fields)
    def post(self, recipe_id):
        """댓글 저장 api"""
        user_id = request.form.get("user_id")
        post = request.form.get("post")
        try:
            img = request.files["img"]
        except Exception:
            pass
        try:
            if img.filename == "":
                image_url = None
            else:
                image_url = boto3_image_upload(img)
        except UnboundLocalError:
            image_url = None
        result = add_post(user_id, recipe_id, post, image_url)
        return result

@recipe_ns.route('/<int:recipe_id>/del')
@recipe_ns.response(200, "success")
@recipe_ns.response(500, "Failed")
class DeletePost(Resource):
    @recipe_ns.expect(delete_post_expect_fields)
    @recipe_ns.marshal_with(delete_post_fields)
    def delete(self, recipe_id):
        """댓글 삭제 api"""
        post_id = request.json.get("post_id")
        result = delete_post(recipe_id, post_id)
        return result