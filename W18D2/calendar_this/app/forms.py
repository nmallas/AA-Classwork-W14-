from flask_wtf import FlaskForm
from datetime import datetime
from wtforms import StringField, SubmitField
from wtforms.validators import (DataRequired, ValidationError)
from wtforms.fields import (
    BooleanField, DateField, StringField, SubmitField, TextAreaField, TimeField
)
from wtforms.widgets.html5 import (DateInput, TimeInput)

class AppointmentForm(FlaskForm):
    def validate_end_date(form, field):
        start = datetime.combine(form.start_date.data, form.start_time.data)
        end = datetime.combine(field.data, form.end_time.data)
        if start >= end:
            msg = "End date/time must come after start date/time"
            raise ValidationError(msg)


    name = StringField('Name', validators=[DataRequired()])
    start_date = DateField('Start Date', validators=[DataRequired()], widget=DateInput())
    start_time = TimeField('Start Time', validators=[DataRequired()], widget=TimeInput())
    end_date = DateField('End Date', validators=[DataRequired()], widget=DateInput())
    end_time = TimeField('End Time', validators=[DataRequired()], widget=TimeInput())
    description = TextAreaField('Description', validators=[DataRequired()])
    private = BooleanField('Private')
    submit = SubmitField('Create an appointment')
