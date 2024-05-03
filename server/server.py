from flask import Flask, render_template, jsonify, url_for
from flask_cors import CORS
from markupsafe import escape

app = Flask(__name__)
CORS(app)

# @app.route('/')
# def index():
#     return render_template('index.html')
#     # return "<p>Hello world!</p>"

@app.route('/')
def index():
    return "Index Page"

@app.route('/hello')
def hello():
    return "Hello, World!"

@app.route('/user/<username>')
def show_user_profile(username):
    # show the user profile for that user
    return f"User {escape(username)}"

@app.route('/post/<int:post_id>')
def show_post(post_id):
    # show the post with the given id, the id is an integer
    return f"Post {post_id}"

@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    # show the subpath after /path/
    return f"Subpath {escape(subpath)}"

@app.route('/converter-types')
def converter_types():
    return jsonify({
        'string': "(default) accepts any text without a slash",
        'int': "accepts positive integers",
        'float': "accepts positive floating point values",
        'path': "like string but also accepts slashes",
        'uuid': "accepts UUID strings"
    })

@app.route('/projects/')
def projects():
    return 'The project page'


@app.route('/about')
def about():
    return 'The about page'


@app.route('/login')
def login():
    return 'login'

with app.test_request_context():
    print(url_for('index'))
    print(url_for('login'))
    print(url_for('index'))




@app.route('/api/home')
def return_home():
    return jsonify({
        'message': "Hello world!",
        'people': ['Jack', 'Harry', 'Barry']
       
    })

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
 