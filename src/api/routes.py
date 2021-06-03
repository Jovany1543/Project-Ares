"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Gun, Activity, User, gun_activities, gun_bookmarks
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200


    #bookmarks page end points
@api.route('/bookmark', methods=['POST'])
def add_new_bookmark():

    # First we get the payload json
    body = request.get_json()
    user_id = request.json.get('user_id')
    gun_id = request.json.get('gun_id')

    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    if 'user_id' not in body:
        raise APIException('You need to specify the user id', status_code=400)
    if 'gun_id' not in body:
        raise APIException('You need to specify the gun id', status_code=400)

    # at this point, all data has been validated, we can proceed to inster into the bd
    try:
        user = User.query.get(user_id)

        gun = Gun.query.get(gun_id)

        user.bookmarks.append(gun)
        db.session.commit()
    except Exception as e:
        payload = {
            'msg': e
        }
        return jsonify(payload), 409

    payload = {
        'msg': "Successfully added bookmark",
        'user': user.serialize()
    }

    return jsonify(payload), 200


@api.route('/bookmark/<gun_id>/user/<user_id>', methods=['DELETE'])
def delete_bookmark(gun_id,user_id):

    user = User.query.get(user_id)
    gun = Gun.query.get(gun_id)

    user.bookmarks.remove(gun)
    db.session.commit()

    return "Success",200

@api.route('/bookmark/user/<user_id>', methods=['GET'])
def list_bookmarks(user_id):

    user = User.query.get(user_id)

    serialized_bookmarks = [item.serialize() for item in user.bookmarks]
    return jsonify(serialized_bookmarks), 200

#     #guns endpoints
# @app.route('/members', methods=['GET'])
# def get_all_members():

#     # this is how you can use the Family datastructure by calling its methods
#     members = jackson_family.get_all_members()
#     response_body = {
#         "hello": "world",
#         "family": members
#     }


#     return jsonify(response_body), 200