"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

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