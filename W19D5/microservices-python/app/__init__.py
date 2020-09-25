from flask import Flask, jsonify
from app.models import db, Rating
from app.config import Configuration
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
migrate = Migrate(app, db)

@app.route("/")
def home():
    return "<h1>FLASK APP WORKING!!!</h1>"

@app.route("/ratings/<int:book_id>")
def getRating(book_id):
    ratings = Rating.query.filter(Rating.book_id == book_id).all()
    rating_values = [rating.value for rating in ratings]
    print(rating_values)
    if not rating_values:
        res = {"error": 'No ratings for this book yet.'}
        return jsonify(res), 404
    rating_average = round((sum(rating_values) / len(rating_values)), 2)
    return jsonify({"avg": rating_average, "values": rating_values})
