
from intra import ic
from config import campus_id
from flask import Flask
from datetime import date

import os
import sqlite3

app = Flask(__name__)

payload = {
    "filter[primary_campus_id]":campus_id
}


ic.progress_bar=True
data = ic.pages_threaded("users", params=payload)

@app.route("/api/user", methods=["GET"])

def get_user() -> {}:
    for user in data:
        return user
if __name__ == "__main__":
    app.run(host = "0.0.0.0", port = 5000)



