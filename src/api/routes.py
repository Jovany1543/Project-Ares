"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
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
    print(body)
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
    # return jsonify(access_token=access_token)

# Protect a route with jwt_required, which will kick out requests without a valid JWT present.
@api.route("/protected", methods=["GET"])
# @jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200