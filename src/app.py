"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate
from flask_swagger import swagger
from flask_cors import CORS
from api.utils import APIException, generate_sitemap
from api.models import db, Gun, Activity, User, gun_activities, gun_bookmarks
from api.routes import api
from api.admin import setup_admin


ENV = os.getenv("FLASK_ENV")
static_file_dir = os.path.join(os.path.dirname(os.path.realpath(__file__)), '../public/')
app = Flask(__name__)
app.url_map.strict_slashes = False

# database condiguration
if os.getenv("DATABASE_URL") is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin
setup_admin(app)

# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    if ENV == "development":
        return generate_sitemap(app)
    return send_from_directory(static_file_dir, 'index.html')

# any other endpoint will try to serve it like a static file
@app.route('/<path:path>', methods=['GET'])
def serve_any_other_file(path):
    if not os.path.isfile(os.path.join(static_file_dir, path)):
        path = 'index.html'
    response = send_from_directory(static_file_dir, path)
    response.cache_control.max_age = 0 # avoid cache memory
    return response

# this only runs if `$ python src/main.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)

#bookmarks page end points
@app.route('/bookmark', methods=['POST'])

def add_new_bookmark():

    # First we get the payload json
    body = request.get_json()

    if body is None:
        raise APIException("You need to specify the request body as a json object", status_code=400)
    if 'user_id' not in body:
        raise APIException('You need to specify the user id', status_code=400)
    if 'gun_id' not in body:
        raise APIException('You need to specify the gun id', status_code=400)

    # at this point, all data has been validated, we can proceed to inster into the bd
    
    new_bookmark = gun_bookmarks.insert().values(user_id=body['user_id'], gun_id=body['gun_id'])
    db.session.execute(new_bookmark)
    return "ok", 200

# @app.route('/member/<int:member_id>', methods=['DELETE'])

# def delete_member(member_id):
#     status = 200
#     try:
#         member = jackson_family.delete_member(member_id)
#         if member == False:
#             response_body = {
#                  "message": "Member not found!"
#             }
#             status = 400
#         else:
#             response_body = True
            
#     except:
#         response_body = {
#             "message": "Error with the server"
#         }
#         status = 500
#     return jsonify(response_body), status

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