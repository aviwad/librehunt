from flask import (
    flash, g, redirect, render_template, request, url_for, Flask, send_from_directory
)
from flask_mail import Mail, Message
import os
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
fullDB = random.shuffle(fullDB)
# TODO: shuffle the list of distros so they get shuffled on recommendations page each time

# empty array(s) waiting to be filled up corresponding to the list below
# perfect, lts, fsfrating, customtweaks, secure, niche
app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # empty list containing separate lists for perfect, lts, fsfrating, customtweaks, secure, niche
        all = [[],[],[],[],[]]

        # take variables for user input, and default to 0
        technicalexpertise = int(request.form.get("technicalexpertise") or 0)
        oldnew = int(request.form.get("oldnew") or 0)
        lts = int(request.form.get("lts") or 0)
        lookalike = (request.form.get("lookalike") or "0")
        touch = int(request.form.get("touch") or 0)
        secure = int(request.form.get("secure") or 0)
        niche = int(request.form.get("niche") or 0)
        customtweaks = int(request.form.get("customtweaks") or 0)

        # a hack to get around the messed up ordering of variables in the Database
        trueRow = [[],[],[],[],[]]

        # loop through amount of distro types (similars+perfect)
        for index in range(5):
            # loop through distros
            for row in fullDB:
                if row[1] == technicalexpertise:
                    # get the 5 switching attributes into the array synced with the final distros
                    trueRow[1] = row[3]
                    trueRow[2] = row[8]
                    trueRow[3] = row[10]
                    trueRow[4] = row[7]
                    #trueRow[5] = row[8]
                    # switch the value of an attribute temporarily if not the perfect distro check
                    if index != 0:
                        trueRow[index] = int(not trueRow[index])

                    # check the values inputted with the distro values
                    if trueRow[1] == lts and trueRow[4] == secure and trueRow[2] == niche and trueRow[3] == customtweaks:
                        # if the oldnew/touch/lookalike option is specified, filter with the distro
                        # TODO fix broken similar algorithm
                        # add distro only if doesn't matter in these filter options, or if matches with user option
                        if oldnew == 0 or oldnew == row[2]:
                            if touch == 0 or touch == row[6]:
                                if lookalike == "0" or lookalike == row[5]:
                                    all[index].append(row)
        # hack to check whether there are any perfect distros
        isPerfect = []
        isSimilar = [1]
        if (len(all[0]) != 0):
            isPerfect.append(1)
        if (len(all[1]) != 0):
            if (len(all[2]) != 0):
                if (len(all[3]) != 0):
                    if (len(all[4]) != 0):
                        isSimilar.pop()
        # load no distro website if no distros found
        if (all == [[], [], [], [], []]):
            mail_settings = {
                "MAIL_SERVER": 'smtp.gmail.com',
                "MAIL_PORT": 465,
                "MAIL_USE_TLS": False,
                "MAIL_USE_SSL": True,
                "MAIL_USERNAME": "aviwad@gmail.com",
                "MAIL_PASSWORD": os.environ['EMAIL_PASSWORD']
            }

            app.config.update(mail_settings)
            mail = Mail(app)

            with app.app_context():
                msg = Message(subject="No Matches Found!",
                              sender="aviwad@gmail.com",
                              recipients=["aviwad@gmail.com"], # replace with your email for testing
                              body="Hey, there's a bug in your code. no matches were found! technicalexpertise: "+str(technicalexpertise)+" lts: "+str(lts)+" oldnew: "+str(oldnew)+" lookalike: "+str(lookalike)+" touch: "+str(touch)+" secure: "+str(secure)+" niche: "+str(niche)+" customtweaks: "+str(customtweaks)+" version: v1.0")
                mail.send(msg)

            return render_template('none.html')

        # else, load the recommendations page
        return render_template('recommendations.html', isSimilar=isSimilar, isPerfect=isPerfect, perfect=all[0], lts=all[1], niche=all[2], customtweaks=all[3], secure=all[4])

    # else, if it was a GET request, just render the chooser page
    return render_template('index.html')

@app.route("/feedback")
def feedback():
    return render_template('feedback.html')

@app.route("/about")
def about():
    return render_template('about.html')

# add this for all errors to go to same generic page
#app.config['TRAP_HTTP_EXCEPTIONS']=True

# generic error page
@app.errorhandler(Exception)
def page_not_found(e):
    return render_template('404.html'), 404

# use this for the DigitalOcean server
if __name__ == "__main__":
    app.run()

