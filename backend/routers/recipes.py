from fastapi import APIRouter
from backend import models

router = APIRouter()

@router.get("/")
async def get_recipes(name: str, limit = 100, offset = 0):
    return {"message": "List of users"}

@router.get("/")
async def get_one_recipe(id: str):
    return {"message": "List of users"}

@router.post("/")
async def add_recipe(recipe: models.Recipe):
    return {"message": "List of users"}

@router.patch("/")
async def update_recipe(recipe: models.Recipe):
    return {"message": "List of users"}

@router.get("/")
async def get_ingredients(id: str):
    return {"message": "List of users"}

@router.get("/")
async def get_

# @router.delete("/")
# async def delete_recipe():
#     return {"message": "List of users"}