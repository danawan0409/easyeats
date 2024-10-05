from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_users():
    return {"message": "List of users"}

@router.get("/")
async def get_one_user():
    return {"message": "List of users"}

@router.post("/")
async def add_user():
    return {"message": "List of users"}

@router.patch("/")
async def update_user():
    return {"message": "List of users"}

@router.delete("/")
async def delete_user():
    return {"message": "List of users"}