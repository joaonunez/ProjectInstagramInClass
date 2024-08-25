from flask import Flask, request, jsonify
from models import db, User, Post, Comment
from flask_migrate import Migrate
from flask_cors import CORS

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///blog.db"
db.init_app(app)
Migrate(app, db)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return "<h1>Blog API Server</h1>"


@app.route("/user", methods=["POST"])
def create_user():
    data = request.get_json()
    user = User()
    if data:
        email = data["email"]
        if email:
            user.email = email
        else:
            return jsonify({
                "msg": "Email No PUEDE Estar Vacio"
            }), 400
        user.first_name = data["first_name"]
        user.last_name = data["last_name"]

        db.session.add(user)
        db.session.commit()
        return jsonify({"msg": "Usuario creado", "data": user.serialize()}), 200
    else:
        return jsonify({"msg": "No Hya Cuerpo en la consulta"}), 400
    



@app.route("/post", methods=["POST"])
def create_post():
    post = Post()
    data = request.get_json()
    post.title = data["title"]
    post.subtitle = data["subtitle"]
    post.body = data["body"]
    

    user_id = data["user_id"]
    if user_id is not None:
        post.user_id = user_id
    else:
        return jsonify({"msg": "el autor es requerido"}), 400

    db.session.add(post)
    db.session.commit()
    return jsonify({"msg": "Post creado", "data": post.serialize()}), 200


@app.route("/comment", methods=["POST"])
def create_comment():
    comment = Comment()
    data = request.get_json()
    user_id = data["user_id"]
    post_id = data["post_id"]
    if user_id is not None and post_id is not None:
        comment.user_id = user_id
        comment.post_id = post_id
    else:
        return jsonify({"msg": "el id de autor y el id de post es requerido"}), 400

















if __name__ == "__main__":
    app.run(host="localhost", port=5000, debug=True)