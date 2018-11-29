from flask import (
    flash, g, redirect, render_template, request, url_for, Flask, send_from_directory
)
app = Flask(__name__)

# Import random to shuffle distro list
import random
# Use SQLite3 for the Distro Database
import sqlite3
app = Flask(__name__)

def takeTwentyFirst(elem):
    return elem[21]

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        db = sqlite3.connect('static/distro.db')
        cursor = db.cursor()

        # Load entire Database as an array to use in Python
        cursor.execute('''SELECT name,technicalexpertise,oldnew,notrolling,lookalike,touch,secure,popularity,customtweaks,desktops,codename,link,donate,shortdes FROM distro''')
        fullDB = cursor.fetchall()

        random.shuffle(fullDB)
        # convert sqlite list of tupple to list of list, so i can add on the values of disimilarity later on
        fullDB = [list(elem) for elem in fullDB]

        # user input, else default to 0
        technicalexpertise = int(request.form.get("technicalexpertise") or 0)
        oldnew = int(request.form.get("oldnew") or 0)
        notrolling = int(request.form.get("lts") or 0)
        lookalike = (request.form.get("lookalike") or "0")
        touch = int(request.form.get("touch") or 0)
        secure = int(request.form.get("secure") or 0)
        popularity = int(request.form.get("popularity") or 0)
        customtweaks = int(request.form.get("customtweaks") or 0)
        # this will be the order of user input, and distro output
        UserOptions=[technicalexpertise,oldnew,notrolling,lookalike,touch,secure,popularity,customtweaks]
        # empty array for selected distros
        SelectedDistros = []
        # loop through database
        for distro in fullDB:
            # add distro to selected distro's if the technical expertise is the same
            if distro[1] <= technicalexpertise:
                SelectedDistros.append(distro)
        # loop through selected distros
        for distro in SelectedDistros:
            # add empty lists at the end 8 times, 7 for the similar and disimilar properties, and the last one to total and order the distros in a descending order for most similar to least similar
            for similarvariable in range(8):
                distro.append([])
            # loop through similarvariables
            for similarvariable in range(7):
                # if similar variable is filter variable
                if similarvariable == 0 or similarvariable == 2 or similarvariable == 3:
                    # if current filter variable is not 0
                    if UserOptions[similarvariable+1] != 0:
                        # then continue and add a 1 to the array at the end coresponding to similarvariable if the distro and user have different values for the property
                        if UserOptions[similarvariable+1] != distro[similarvariable+2]:
                            if len(distro[similarvariable+14]) == 1:
                                distro[similarvariable+14][0]=1
                            else:
                                distro[similarvariable+14].append(1)
                elif UserOptions[similarvariable+1] != distro[similarvariable+2]:
                    if len(distro[similarvariable+14])==1:
                        distro[similarvariable+14][0]=1
                    else:
                        distro[similarvariable+14].append(1)
            # add a 0, so when totaling and sorting descending, it doesn't give error
            distro[21].append(0)
            for similarvariable in range(7):
                # add up the total of disimilarities between distro and user
                if len(distro[similarvariable+14]) == 1:
                    distro[21][0] = distro[21][0] + distro[similarvariable+14][0]
        # sort the distros by how similar they are to what the user wanted
        SelectedDistros.sort(key=takeTwentyFirst)
        SelectedDistros=SelectedDistros[0:20]
        return render_template("recommendations.html", distros=SelectedDistros)



    # else, if it was a GET request, just render the chooser page
    elif request.method == "GET":
        return render_template('index.html')

@app.route("/feedback")
def feedback():
    return render_template('feedback.html')

@app.route("/about")
def about():
    return render_template('about.html')

@app.route("/distrolist")
def distrolist():
    #db
    #make db order random
    # number of distro's
    db = sqlite3.connect('static/distro.db')
    cursor = db.cursor()
    cursor.execute('''SELECT name,desktops,codename,link,donate,shortdes FROM distro''')
    allDB = cursor.fetchall()
    random.shuffle(allDB)
    return render_template('distrolist.html', distros=allDB)

# add this for all errors to go to same generic page
app.config['TRAP_HTTP_EXCEPTIONS']=True

# generic error page
@app.errorhandler(Exception)
def page_not_found(e):
    return render_template('404.html'), 404

# use this for the DigitalOcean server
if __name__ == "__main__":
    app.run()

