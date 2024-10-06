from fastapi import APIRouter, HTTPException
from backend.db import db
from backend.models import Recipe

router = APIRouter()

ref = db.collection('Recipes')

@router.get("/")
async def get_recipes(ingredients:list[str], name:str = None):
    try:
        # Start with a base query on the 'recipes' collection
        query = ref

        # Apply filtering based on ingredient
        if len(ingredients) > 0:
            query = query.where('ingredients', 'array_contains', ingredients)


        # Get the filtered results
        results = query.stream()

        # Convert results to a list of dictionaries
        recipes = [doc.to_dict() for doc in results]

        return recipes

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/{recipe_id}")
async def get_one_recipe(recipe_id: str):
    """
    Retrieves a recipe from Firebase Firestore by its ID.
    """
    try:
        # Get the recipe document from Firestore
        recipe_ref = ref.document(recipe_id)
        recipe = recipe_ref.get()

        if recipe.exists:
            return recipe.to_dict()  # Return the document data as a dictionary
        else:
            raise HTTPException(status_code=404, detail="Recipe not found")
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    

@router.post("/")
async def add_recipe(recipe: Recipe):
    try:
        ref.add(recipe)
        return {"status": "success", "message": "User data stored successfully."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.put("/{recipe_id}")
async def update_recipe(recipe_id: str, recipe: Recipe):
    """
    Updates an existing recipe in Firebase Firestore.
    """
    try:
        # Convert the recipe model to a dictionary
        recipe_data = recipe.model_dump()
        # Update the recipe data in Firestore
        recipe_ref = ref.document(recipe_id)
        recipe_ref.update(recipe_data)

        return {"status": "success", "message": f"Recipe {recipe_id} updated successfully."}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# @router.delete("/")
# async def delete_recipe():
#     return {"message": "List of users"}