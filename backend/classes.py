from pydantic import BaseModel

class User(BaseModel):
    id: int
    name: str
    email: str

class Restaurant(BaseModel):
    pass

class Recipe(BaseModel):
    pass