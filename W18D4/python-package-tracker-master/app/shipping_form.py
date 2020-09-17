from flask_wtf import FlaskForm
from wtforms.fields import (
  StringField, BooleanField, SelectField
)
from wtforms.validators import (
    DataRequired
)
from map.map import map

origin_cities = [enumerate(keys(map))]
print(origin_cities)

class ShippingForm(FlaskForm):
    sender = StringField("Sender Name", [DataRequired()])
    recipient = StringField(u"Recipient Name", [DataRequired("Must add a recipient")])
    origin = SelectField("Origin", [DataRequired("Must add an origin")])
    destination = SelectField("Destination", [DataRequired("Must add a destination")])
    express_shipping = BooleanField("Express Shipping", default=False)
