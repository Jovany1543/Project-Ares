"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Gun, Activity, User, gun_activities, gun_bookmarks
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required,get_jwt_identity

api = Blueprint('api', __name__)

@api.route('/hello', methods=['GET'])
def hello():
    return jsonify('hello'),200

# Signup route
@api.route('/signup', methods=['POST'])
def handle_signup():
    body = request.json # get the request body content
    email = request.json.get('email')
    fname = request.json.get('fname')
    lname = request.json.get('lname')
    password = request.json.get('password')
    
    if body is None:
        return "The request body is null", 400
    if not email:
        return 'You need to enter an email',400
    if not fname:
        return 'You need to enter an fname',400
    if not lname:
        return 'You need to enter an lname',400
    if not password:
        return 'You need to enter a password', 400

    user = User(email=email, fname=fname, lname=lname, password=password, is_active=True)

    db.session.add(user)
    db.session.commit()
    payload = {
        'msg': 'Your account has been registered successfully.',
        'user': user.serialize()
    }

    return jsonify(payload), 200

#Login route
@api.route('/login', methods=['POST'])
def handle_login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)

    user = User.query.filter_by(email=email).first()
    if user is None:
        return jsonify({
            "msg": "No account was found. Please check the email used or create an account."
        }), 401
    
    if password != user.password:
        return jsonify({"msg": "Incorrect password. Please try again."}), 401

    access_token = create_access_token(identity=email)
    payload = {
        'token': access_token,
        'user': user.serialize()
    }
    return jsonify(payload), 200



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
def get_all_bookmarks(user_id):

    user = User.query.get(user_id)

    serialized_bookmarks = [item.serialize() for item in user.bookmarks]
    return jsonify(serialized_bookmarks), 200

#     #guns endpoints
@api.route('/guns', methods=['GET'])
def get_all_guns():
   guns = Gun.query.all()
   
   serialized_guns = [item.serialize() for item in guns]
   return jsonify(serialized_guns), 200

@api.route('/activities', methods=['GET'])
def get_all_activities():
   activities = Activity.query.all()
   serialized_activities = [item.serialize() for item in activities]
   return jsonify(serialized_activities), 200
