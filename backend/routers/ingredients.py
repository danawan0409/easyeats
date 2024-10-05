from fastapi import APIRouter
from backend import models

router = APIRouter()

@router.get("/")
async def get_similar_ingredients(id: str, restrictions: list[str]):
    return {"message": "List of users"}

@router.get("/")
async def get_one_ingredient(id: str):
    return {"message": "List of users"}

@router.post("/")
async def add_ingredients(ingredient: models.Ingredient):
    return {"message": "List of users"}

# @router.patch("/")
# async def update_ingredients(ingredient: models.Ingredient):
#     return {"message": "List of users"}

# @router.delete("/")
# async def delete_ingredients():
#     return {"message": "List of users"}



