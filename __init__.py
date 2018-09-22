from flask import (
    flash, g, redirect, render_template, request, url_for, Flask, send_from_directory
)
app = Flask(__name__)

# Use SQLite3 for the Distro Database
import sqlite3
db = sqlite3.connect('static/distro.db')
cursor = db.cursor()

# Load entire Database as an array to use in Python
cursor.execute('''SELECT * FROM distro''')
fullDB = cursor.fetchall()

# Import random to shuffle distro list
import random

# empty array(s) waiting to be filled up corresponding to the list below
# perfect, lts, fsfrating, customtweaks, secure, niche
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/chooser", methods=["GET", "POST"])
def chooser():
    if request.method == "POST":
        # empty list containing separate lists for perfect, lts, fsfrating, customtweaks, secure, niche
        all = [[],[],[],[],[],[]]

        # take variables for user input, and default to 0
        technicalexpertise = int(request.form.get("technicalexpertise") or 0)
        oldnew = int(request.form.get("oldnew") or 0)
        lts = int(request.form.get("lts") or 0)
        fsfrating = int(request.form.get("fsfrating") or 0)
        lookalike = request.form.get("lookalike")
        touch = int(request.form.get("touch") or 0)
        secure = int(request.form.get("secure") or 0)
        niche = int(request.form.get("niche") or 0)
        customtweaks = int(request.form.get("customtweaks") or 0)

        # a hack to get around the messed up ordering of variables in the Database
        trueRow = [[],[],[],[],[],[]]

        # loop through amount of distro types (similars+perfect)
        for index in range(6):
            # loop through distros
            for row in fullDB:
                if row[1] == technicalexpertise:
                    # get the 5 switching attributes into the array synced with the final distros
                    trueRow[1] = row[3]
                    trueRow[2] = row[4]
                    trueRow[3] = row[10]
                    trueRow[4] = row[7]
                    trueRow[5] = row[8]
                    # switch the value of an attribute temporarily if not the perfect distro check
                    if index != 0:
                        trueRow[index] = int(not trueRow[index])

                    # check the values inputted with the distro values
                    if trueRow[1] == lts and trueRow[2] == fsfrating and trueRow[4] == secure and trueRow[5] == niche and trueRow[3] == customtweaks:
                        # if the oldnew/touch/lookalike option is specified, filter with the distro
                        # TODO fix broken similar algorithm
                        if oldnew == 1 and row[2] == 1:
                            all[index].append(row)
                        elif touch == 1 and row[6] == 1:
                            all[index].append(row)
                        elif lookalike != 0 and row[5] == lookalike:
                            all[index].append(row)
                        # otherwise just add it into the list of final distros
                        else:
                            all[index].append(row)
        # hack to check whether there are any perfect distros
        isPerfect = []
        if (len(all[0]) != 0):
            isPerfect.append(1)

        # load no distro website if no distros found
        if (all == [[], [], [], [], [], []]):
            return render_template('none.html')

        # else, load the recommendations page
        return render_template('recommendations.html', isPerfect=isPerfect, perfect=all[0], lts=all[1], fsfrating=all[2], customtweaks=all[3], secure=all[4], niche=all[5])

    # else, if it was a GET request, just render the chooser page
    return render_template('chooser.html')

@app.route("/feedback")
def feedback():
    # TODO feedback
    return render_template('feedback.html')

@app.route("/about")
def about():
    # TODO about
    return render_template('about.html')

# add this for all errors to go to same generic page!
app.config['TRAP_HTTP_EXCEPTIONS']=True

# generic error page
@app.errorhandler(Exception)
def page_not_found(e):
    return render_template('404.html'), 404

# use this for the DigitalOcean server, idk how it works but it does
if __name__ == "__main__":
    app.run()

