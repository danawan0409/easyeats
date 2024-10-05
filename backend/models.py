from pydantic import BaseModel

class User(BaseModel):
    name: str
    userId: str
    restrictions: dict
    password: str
    username: str

class Restaurant(BaseModel):
    id: str
    name: str
    location: str

class Recipe(BaseModel):
    id: str
    name: str
    ingredients: dict
    category: list[str]

class Ingredient(BaseModel):
    id: str
    name: str
    category: list[str]
