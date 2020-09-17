from flask import Flask, render_template
from config import Configuration
# from app import routes
# import os


app = Flask(__name__)
app.config.from_object(Configuration)


# app.config.update({'SECRET_KEY': os.environ.get('SECRET_KEY')})
# app.register_blueprint(routes.bp)

@app.route("/")
def package_tracker():
    return "<h1>Package Tracker</h1>"


@app.route("/new_package", methods=["GET", "POST"])
def new_package():
    return render_template('shipping_request.html')
