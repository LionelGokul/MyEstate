from flask import Flask
from flask_cors import CORS
from models import db
from dotenv import load_dotenv
load_dotenv()

# initializing APP
app = Flask("MyEstate", static_url_path='/static', static_folder='static')

# Configuring Connection String
app.config[
    'SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@localhost/myestate'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['CORS_HEADERS'] = 'Content-Type'


# Cross Origin Resource Sharing
CORS(app, resources={r"/*": {"origins": "*"}})

# initializing db
db.init_app(app)
with app.app_context():
    db.create_all()

from urls import configure_URL

# initializing Routes
configure_URL(app)

if __name__ == "__main__":
    app.run(debug=True)
