from flask import Blueprint, render_template
from flask_login import login_required
from app.forms import TableAssignmentForm
from app.models import Employee, Table, Order
from sqlalchemy.orm import joinedload
from flask_login import current_user

bp = Blueprint("orders", __name__, url_prefix="")

@bp.route("/")
@login_required
def index():
  form = TableAssignmentForm()
  employeeOptions = [(emp.id, emp.name)
    for emp in Employee.query.order_by(Employee.name).all()]
  form.servers.choices = employeeOptions

  tables = Table.query.order_by(Table.number).all()
  open_orders = Order.query.filter(Order.finished == False)
  busy_table_ids = [order.table_id for order in open_orders]
  open_tables = [table for table in tables if table.id not in busy_table_ids]
  form.tables.choices = [(t.id, f"Table {t.number}") for t in open_tables]

  my_tables = []
  return render_template("orders.html", form=form)

@bp.route("/assign", methods=["POST"])
@login_required
def assign():
  return

@bp.route("/close/<int:id>", methods=["Post"])
def close_table(id):
  print(id)
