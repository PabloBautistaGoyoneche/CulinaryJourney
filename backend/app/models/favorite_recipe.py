from pydantic import BaseModel

class FavoriteRecipeCreate(BaseModel):
    user_id: int
    recipe_id: int

class FavoriteRecipe(FavoriteRecipeCreate):
    favorite_id: int
