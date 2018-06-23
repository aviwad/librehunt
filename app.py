
from flask import (
    flash, g, redirect, render_template, request, url_for, Flask
)
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')
