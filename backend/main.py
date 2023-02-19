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


@app.get("/nonprofit/get/{uuid}", status_code=200)
async def get_nonprofit(uuid):
    nps = [np for np in db["nonprofits"] if np["uuid"] == uuid]
    if len(nps) == 0:
        raise HTTPException(status_code=400, detail="Nonprofit does not exist")

    nonprofit = nps[0]

    return nonprofit


@app.post("/donate", status_code=200)
async def donate(request: Request):
    info = await request.json()
    if "email" not in info:
        raise HTTPException(status_code=400, detail="email key not present")
    if "uuid" not in info:
        raise HTTPException(status_code=400, detail="uuid key not present")
    if "amount" not in info:
        raise HTTPException(status_code=400, detail="amount key not present")

    email = info["email"]
    uuid = info["uuid"]
    amount = info["amount"]

    nps = [np["name"] for np in db["nonprofits"] if np["uuid"] == uuid]
    if len(nps) == 0:
        raise HTTPException(status_code=400, detail=f"nonprofit with uuid {uuid} not found")
    npname = nps[0]

    donations = db["users"][email]["donations"]
    
    donated = False
    for i, (name, val) in enumerate(donations):
        if name == npname:
            donations[i] = (name, val + amount)
    if not donated:
        db["users"][email]["donations"].append((name, amount))

    return 200
