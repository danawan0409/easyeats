from fastapi import APIRouter
from backend import models

router = APIRouter()

@router.get("/")
async def get_user(id: str):
    return {"message": "User "}

@router.post("/")
async def add_user(user: models.User):
    return {"message": "List of users"}

@router.patch("/")
async def update_user(id: str, fields: dict):
    return {"message": "List of users"}

# @router.delete("/")
# async def delete_user():
#     return {"message": "List of users"}