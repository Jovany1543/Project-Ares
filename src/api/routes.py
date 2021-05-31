"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


# Signup route
@api.route('/signup', methods=['POST'])
def signup():
    body = request.json # get the request body content
    email = request.json.get('email')
    password = request.json.get('password')

    if body is None:
        return "The request body is null", 400
    if not email:
        return 'You need to specify the email',400
    if not password:
        return 'You need to enter a password', 400

    user = User(email=email,password=password,is_active=True)

    db.session.add(user)
    db.session.commit()
    payload = {
        'msg': 'Thank you for registering. Your account has been added successfully.',
        'user': user.serialize()
    }

    return jsonify(payload), 200