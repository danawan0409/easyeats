from fastapi import APIRouter
from backend.db import db
from backend.classes import Ingredient

router = APIRouter()

ref = db.collection('Ingerdients')

@router.get("/")
async def get_ingredient():
    return {"message": "List of users"}

@router.get("/")
async def get_one_ingredient(id: str):
    return {"message": "List of users"}

@router.post("/")
async def add_ingredient():
    return {"message": "List of users"}

@router.patch("/")
async def update_ingredient():
    return {"message": "List of users"}

@router.delete("/")
async def delete_ingredient():
    return {"message": "List of users"}