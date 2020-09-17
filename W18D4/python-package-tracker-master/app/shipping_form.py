from flask_wtf import FlaskForm
from wtforms.fields import (
  StringField, BooleanField, SelectField, SubmitField
)
from wtforms.validators import (
    DataRequired
)

from map.map import map

origin_cities = map.keys()

def cities_list(lst):
  unique_cities = set()
  for cities in map.values():
    for city in cities:
      unique_cities.add(city)
  return unique_cities


destination_cities = cities_list(map)

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
