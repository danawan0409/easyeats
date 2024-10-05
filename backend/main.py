from typing import Union
from backend.routers import users, recipes, restaurants
from fastapi import FastAPI

app = FastAPI()

app.include_router(users.router, prefix="/api")
app.include_router(recipes.router, prefix="/api")
app.include_router(restaurants.router, prefix="/api")

@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}