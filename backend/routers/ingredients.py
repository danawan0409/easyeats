from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_recipes():
    return {"message": "List of users"}

@router.get("/")
async def get_one_recipe():
    return {"message": "List of users"}

@router.post("/")
async def add_recipe():
    return {"message": "List of users"}

@router.patch("/")
async def update_recipe():
    return {"message": "List of users"}

@router.delete("/")
async def delete_recipe():
    return {"message": "List of users"}