
from intra import ic
from config import campus_id
from flask import Flask
from datetime import date
from flask_cors import CORS

import os
import sqlite3
import json



app = Flask(__name__)
CORS(app)

payload = {
    "filter[primary_campus_id]":campus_id
}

ic.progress_bar=True
#usersdata = ic.pages_threaded("users", params=payload)
usersdata = ic.pages_threaded("users", params=payload)
#usersdata = ic.get("users")
#teamsdata = ic.pages_threaded("campus", params=payload2)
teamsdata = ic.get("campus")

@app.route("/api/users", methods=["GET"])
def get_users() -> {}:
    userobjs =  [obj for obj in usersdata if(obj['first_name'] != '3b3')] 
    json_string = json.dumps(userobjs)
    return json_string
            
@app.route("/api/campus", methods=["GET"])
def get_teams():
    if teamsdata.status_code == 200:
        data = teamsdata.json()
        return json.dumps(data)

@app.route("/", methods=["GET"])
def index():
    return "<h1>Hello, world!</h1>"

if __name__ == "__main__":                  
    app.run(host = "0.0.0.0", port = 5000)  #coment this for dply in heroku