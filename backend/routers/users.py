from fastapi import APIRouter
from backend.db import db

router = APIRouter()

ref = db.collection('Users')

@router.get("/")
async def get_users():
    # Get all users from the database
    users = db.users.find()
    return {"data": users}
@router.get("/")
async def get_one_user(userid: str):
    # Get all users f

    return {"message": "List of users"}

@router.post("/")
async def add_user(user: models.User):
    return {"message": "List of users"}

@router.patch("/")
async def update_user(id: str, fields: dict):
    return {"message": "List of users"}

# @router.delete("/")
# async def delete_user():
#     return {"message": "List of users"}