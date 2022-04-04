from flask import Flask
from datetime import date

import os
import sqlite3

connection = sqlite3.connect("users.db", check_same_thread=False)
cursor = connection.cursor()

app = Flask(__name__)

@app.route("/api/user", methods=["GET"])
def get_user() -> {}:
    if os.environ["today"] != str(date.today()):
        os.environ["login"] = cursor.execute("SELECT login FROM users ORDER BY RANDOM() LIMIT 1;").fetchone()[0]
        os.environ["today"] = date.today()
    return {
        "login": os.environ["login"]
    }

if __name__ == "__main__":
    os.environ["today"] = str(date.today())
    os.environ["login"] = cursor.execute("SELECT login FROM users ORDER BY RANDOM() LIMIT 1;").fetchone()[0]

    app.run(host = "0.0.0.0", port = 5000)