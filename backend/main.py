from typing import Union
from backend.routers import users, recipes, restaurants, map, ingredients
from fastapi import FastAPI
from backend.db import db

app = FastAPI()

app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(recipes.router, prefix="/recipes", tags=["Recipes"])
app.include_router(restaurants.router, prefix="/restaurants", tags=["Restaurants"])
app.include_router(map.router, prefix="/map", tags=["Map"])
app.include_router(ingredients.router, prefix="/ingredients", tags=["Ingredients"])

@app.get("/")
def read_root():
    return {"Hello": "World"}

