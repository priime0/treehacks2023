from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import *
from db import db

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"data": "Hello world"}


@app.get("/nonprofit/all")
def get_nonprofits():
    return {"nonprofits": db["nonprofits"]}


@app.post("/user/signup", status_code=200)
async def user_signup(info: Request):
    info = await info.json()
    required_keys = ["firstName", "lastName", "email", "password"]
    for rqk in required_keys:
        if rqk not in info:
            raise HTTPException(status_code=400, detail=f"Missing key {rqk}")
    first_name = info["firstName"]
    last_name = info["lastName"]
    email = info["email"]
    password = info["password"]

    if email in db["users"]:
        raise HTTPException(status_code=400, detail=f"Email {email} already registered")

    db["users"][email] = {
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "password": password,
        "donations": list(),
    }

    return {"email": email}


@app.post("/user/login", status_code=200)
async def user_login(info: Request):
    info = await info.json()
    required_keys = ["email", "password"]
    for rqk in required_keys:
        if rqk not in info:
            print("Missing key")
            raise HTTPException(status_code=400, detail=f"Missing key {rqk}")

    email = info["email"]
    password = info["password"]

    if email not in db["users"]:
        raise HTTPException(status_code=400, detail="Incorrect login!")

    if db["users"][email]["password"] != password:
        raise HTTPException(status_code=400, detail="Incorrect login!")

    return {"email": email}


@app.get("/user/get/{email}", status_code=200)
async def get_user(email):
    if email not in db["users"]:
        raise HTTPException(status_code=400, detail="Nonexistent user")

    return db["users"][email]


@app.get("/user/all", status_code=200)
async def get_users():
    return db["users"]
