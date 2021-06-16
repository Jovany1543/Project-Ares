"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Gun, Activity, User, gun_activities, gun_bookmarks
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from sqlalchemy.sql import exists
from twilio.rest import Client
import os

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = os.environ['TWILIO_ACCOUNT_SID']
auth_token = os.environ['TWILIO_AUTH_TOKEN']
client = Client(account_sid, auth_token)

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

    # check_user = User.query.filter_by(email=email)
    check_user = User.query.filter_by(email=email).first()

    if check_user is not None:
        return jsonify({
            'msg': 'The email address already exists. Please login to your account to continue.'
        }),409

    user = User(email=email, fname=fname, lname=lname, password=password, is_active=True)

    db.session.add(user)
    db.session.commit()
    message = client.messages \
                .create(
                     body="Thank you for signing up with Guniverse! Your account was successfully created.",
                     from_='+19194464678',
                     to='+17868734221'
                 )
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
        'token': access_token.decode("utf-8"),
        'user': user.serialize()
    }

    return jsonify(payload), 200

# Bookmarks page end points
@api.route('/bookmark/user/<int:user_id>', methods=['PUT', 'DELETE'])
def handle_bookmarks(user_id):
    bookmark = request.get_json()

    # Add Bookmarks
    if request.method == 'PUT':
        user = User.query.get(user_id)
        print("!!BOOKMARK: ", bookmark)

        try:
            user.bookmarks = []
            bookmarkedGun = Gun.query.get(bookmark["gun"]["id"])
            user.bookmarks.append(bookmarkedGun)
        
        except Exception as e:
            payload = {
                'msg': "Couldn't add bookmark. Try again later.",
                'error': e
            }
            return jsonify(payload), 409

        db.session.commit()

        payload = {
            'msg': "Successfully added bookmark",
            'user': user.serialize()
        }
        return jsonify(payload), 200


    # Delete Bookmarks
    if request.method == 'DELETE':
        user = User.query.get(user_id)
        gun = Gun.query.get(bookmark["gun_id"])

        user.bookmarks.remove(gun)
        db.session.commit()

        return "Success", 200


@api.route('/bookmark/user/<user_id>', methods=['GET'])
def get_all_bookmarks(user_id):

    user = User.query.get(user_id)

    serialized_bookmarks = [item.serialize() for item in user.bookmarks]
    return jsonify(serialized_bookmarks), 200


# Guns Endpoints
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
