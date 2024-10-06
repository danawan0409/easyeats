from fastapi import APIRouter, HTTPException
from backend.db import db
from backend.classes import Recipe

router = APIRouter()

ref = db.collection('Recipes')

@router.get("/")
async def get_recipes(parameters: dict):
    try:
        # Start with a base query on the 'recipes' collection
        query = ref

        # Apply filtering based on ingredient
        if ingredient:
            query = query.where('ingredients', 'array_contains', ingredient)


        # Get the filtered results
        results = query.stream()

        # Convert results to a list of dictionaries
        recipes = [doc.to_dict() for doc in results]

        return recipes

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/{recipe_id}")
async def get_one_recipe():
    return {"message": "List of users"}

@router.post("/")
async def add_recipe(recipe: Recipe):
    try:
        ref.add(recipe)
        return {"status": "success", "message": "User data stored successfully."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.patch("/")
async def update_recipe(recipe_id: str, recipe: Recipe):
    try:
        recipe_data = recipe.model_dump()

        # Update the recipe data in Firestore
        recipe_ref = ref.document(recipe_id)
        recipe_ref.update(recipe_data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# @router.delete("/")
# async def delete_recipe():
#     return {"message": "List of users"}