from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from backend.database import db, cursor
app = FastAPI()

# Allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Event Model
class Event(BaseModel):
    event_name: str
    event_date: str
    location: str
    description: str

# User Model
class User(BaseModel):
    name: str
    email: str
    password: str


@app.get("/")
def home():
    return {"message": "Event Management System Running"}


# Add Event
@app.post("/add_event")
def add_event(event: Event):

    sql = "INSERT INTO events (event_name,event_date,location,description) VALUES (%s,%s,%s,%s)"
    values = (event.event_name, event.event_date, event.location, event.description)

    cursor.execute(sql, values)
    db.commit()

    return {"message": "Event added successfully"}


# Display Events
@app.get("/events")
def get_events():

    cursor.execute("SELECT * FROM events")
    result = cursor.fetchall()

    return result


# Update Event
@app.put("/update_event/{id}")
def update_event(id: int, event: Event):

    sql = "UPDATE events SET event_name=%s,event_date=%s,location=%s,description=%s WHERE id=%s"
    values = (event.event_name, event.event_date, event.location, event.description, id)

    cursor.execute(sql, values)
    db.commit()

    return {"message": "Event updated successfully"}


# Delete Event
@app.delete("/delete_event/{id}")
def delete_event(id: int):

    cursor.execute("DELETE FROM events WHERE id=%s", (id,))
    db.commit()

    return {"message": "Event deleted successfully"}


# User Registration
@app.post("/register")
def register(user: User):

    sql = "INSERT INTO users (name,email,password) VALUES (%s,%s,%s)"
    values = (user.name, user.email, user.password)

    cursor.execute(sql, values)
    db.commit()

    return {"message": "User registered successfully"}