from flask import Flask;
from app.models import db;
from app.config import Configuration;
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
migrate = Migrate(app, db)
