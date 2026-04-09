import mysql.connector

# MySQL database connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Hari@1827",   # your MySQL password
    database="event_project_db"
)

cursor = db.cursor()