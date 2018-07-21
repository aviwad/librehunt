
from flask import (
    flash, g, redirect, render_template, request, url_for, Flask
)
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/chooser") #, methods=["GET", "POST"])
def chooser():
#    if request.method == "POST":
#        return render_template('recommendations.html', )
    return render_template('chooser.html')

@app.route("/recommendations")
def recommendations():
    return render_template('recommendations.html', )

@app.route("/feedback")
def feedback():
    return render_template('feedback.html')

@app.route("/about")
def about():
    return render_template('about.html')
