from mysql.connector import MySQLConnection
from passlib.hash import bcrypt
from models.user import UserDB, User
from db.connection import get_db
from models.favorite_recipe import FavoriteRecipe, FavoriteRecipeCreate
from typing import List

db_connection = get_db()

def create_user(db_connection: MySQLConnection, username: str, email: str, hashed_password: str, confirm_password: str):

    # Asegúramos que la contraseña no esté vacía antes de llegar aquí
    if not hashed_password:
        raise ValueError("La contraseña no puede estar vacía")

    # Asegúramos que la contraseña no esté hasheada previamente
    if hashed_password and not  bcrypt.identify(hashed_password):
        hashed_password = bcrypt.hash(hashed_password)

    cursor = db_connection.cursor()
    cursor.execute("INSERT INTO users (username, email, hashed_password) VALUES (%s, %s, %s)",
                   # Usar None si la contraseña está vacía
                   (username, email, hashed_password or None))
    db_connection.commit()
    cursor.close()

    # Asegúrate de que todos los campos requeridos estén establecidos
    user_create_response = {
        "username": username,
        "email": email,
        "hashed_password": hashed_password,
        "confirm_password": confirm_password,
        "user_id": cursor.lastrowid
    }

    return UserDB(**user_create_response)

def create_favorite_recipes(db_connection: MySQLConnection, user_id: int, recipe_id: int):
    cursor = db_connection.cursor()
    cursor.execute("INSERT INTO favorite_recipes (user_id, recipe_id) VALUES (%s, %s)",
                   (user_id, recipe_id))
    db_connection.commit()
    favorite_id = cursor.lastrowid
    cursor.close()
    return FavoriteRecipeCreate(favorite_id=favorite_id, user_id=user_id, recipe_id=recipe_id)

def get_user_by_email(db_connection: MySQLConnection, email: str) -> UserDB:
    cursor = db_connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()
    cursor.close()
    return User(**user) if user else None

def see_favorite_recipes(db_connection: MySQLConnection, user_id: int) -> List[FavoriteRecipe]:
    cursor = db_connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM favorite_recipes WHERE user_id = %s", (user_id,))
    favorite_recipes_data = cursor.fetchall()
    cursor.close()

    favorite_recipes = []
    for recipe_data in favorite_recipes_data:
        favorite_recipe = FavoriteRecipe(**recipe_data)
        favorite_recipes.append(favorite_recipe)

    return favorite_recipes

def delete_favorite_recipe(db_connection: MySQLConnection, favorite_recipe_id: int):
    cursor = db_connection.cursor()
    cursor.execute("DELETE FROM favorite_recipes WHERE favorite_id = %s", (favorite_recipe_id,))
    db_connection.commit()
    cursor.close()
