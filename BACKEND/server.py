
from intra import ic
from config import campus_id
from flask import Flask
from datetime import date

import os
import sqlite3
import json

app = Flask(__name__)

payload = {
    "filter[primary_campus_id]":campus_id
}

# payload2 = {
#     "filter[name]": "Madrid"
# }






ic.progress_bar=True
#usersdata = ic.pages_threaded("users", params=payload)
usersdata = ic.pages_threaded("users", params=payload)
#usersdata = ic.get("users")
#teamsdata = ic.pages_threaded("campus", params=payload2)
teamsdata = ic.get("campus")

@app.route("/api/users", methods=["GET"])
def get_users() -> {}:
    json_string = json.dumps(usersdata)
    return json_string
            
@app.route("/api/campus", methods=["GET"])
def get_teams():
    if teamsdata.status_code == 200:
        data = teamsdata.json()
        return json.dumps(data)

if __name__ == "__main__":
    app.run(host = "0.0.0.0", port = 5000)



