import app

@app.route("/")
def home():
    return "<h1>FLASK APP WORKING!!!</h1>"
