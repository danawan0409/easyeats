from fastapi import APIRouter

router = APIRouter()

@router.get("/restaurants")
async def get_users():
    return {"message": "List of restaurants"}