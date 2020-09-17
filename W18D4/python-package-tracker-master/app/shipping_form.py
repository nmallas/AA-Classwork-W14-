from flask_wtf import FlaskForm
from wtforms.fields import (
  StringField, BooleanField, SelectField, SubmitField
)
from wtforms.validators import (
    DataRequired, AnyOf
)

from map.map import map

origin_cities = map.keys()
destination_cities = map.values()


class ShippingForm(FlaskForm):
    sender = StringField("Sender Name", [DataRequired()])
    recipient = StringField("Recipient Name", [DataRequired(
      "Must add a recipient")])
    origin = SelectField("Origin", [DataRequired(
      "Must add an origin")], choices=origin_cities)
    destination = SelectField("Destination", [DataRequired(
      "Must add a destination")], choices=destination_cities)
    express_shipping = BooleanField("Express Shipping", default=False)
    submit = SubmitField("Submit")
