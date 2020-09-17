from flask import Flask, render_template, request, redirect, url_for
from config import Configuration
from app.shipping_form import ShippingForm
from flask_migrate import Migrate
from app.models import db, Package
# from app import routes
# import os

app = Flask(__name__)
app.config.from_object(Configuration)
db.init_app(app)
migrate = Migrate(app, db)


# app.config.update({'SECRET_KEY': os.environ.get('SECRET_KEY')})
# app.register_blueprint(routes.bp)

@app.route("/")
def root_endpoint():
    packages = Package.query.all()
    return render_template('package_status.html', packages=packages)


@app.route("/new_package", methods=["GET", "POST"])
def new_package():
    form = ShippingForm()
    if request.method == 'POST':
        package = Package(
                sender=form.sender.data,
                recipient=form.recipient.data,
                origin=form.origin.data,
                destination=form.destination.data,
                express_shipping=form.express_shipping.data)
        db.session.add(package)
        db.session.commit()
        return redirect(url_for('.root_endpoint'))
    return render_template('shipping_request.html', form=form)
