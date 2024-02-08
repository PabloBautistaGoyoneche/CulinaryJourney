from fastapi import Depends, FastAPI, HTTPException
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from db.operations import MySQLConnection
from auth.login import create_access_token, verify_password, get_user, get_current_user
from db.connection import get_db
from db.operations import see_favorite_recipes, create_user
from models.token import Token
from models.user import User, UserCreate, UserCreateResponse
from db.operations import create_favorite_recipes
from models.favorite_recipe import FavoriteRecipeCreate, FavoriteRecipe

app = FastAPI()

# Configurar los orígenes permitidos (reemplaza esto con los orígenes permitidos en tu caso)
origins = [
    "http://localhost",
    "http://localhost:4200",
]

# Habilitar CORS para los orígenes permitidos
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["Authorization", "Content-Type"],
)

# Definir tus rutas y lógica de la aplicación FastAPI a continuación

# # Configurar CORS
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:4200"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

db_connection = get_db()

# Ruta para el login y generación del token
@app.post("/login", response_model=Token)
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends(), db_connection: MySQLConnection = Depends(get_db)):
    user = get_user(db_connection, email=form_data.username)
    if not user or not verify_password(form_data.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Incorrect email or password")

    # Generar el token de acceso
    access_token = create_access_token(data={"sub": user.email})

    # Devolver el token en la respuesta
    return {"access_token": access_token, "token_type": "bearer"}

# Ruta para el registro de usuarios
@app.post("/register-users", response_model=UserCreateResponse)
async def register_users(user_data: UserCreate, db_connection: MySQLConnection = Depends(get_db)):
    # Verificar que las contraseñas coincidan
    if user_data.hashed_password != user_data.confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    # Verificar si el usuario ya existe
    existing_user = get_user(db_connection, email=user_data.email)
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    # Crear el usuario
    new_user_data = create_user(
        db_connection,
        username=user_data.username,
        email=user_data.email,
        hashed_password=user_data.hashed_password,
        confirm_password=user_data.confirm_password
    )

    # Generar el token de acceso
    access_token = create_access_token(data={"sub": new_user_data.email})

    # Devolver el nuevo usuario y el token en la respuesta
    return {
        "user_id": new_user_data.user_id,
        "username": new_user_data.username,
        "email": new_user_data.email,
        "hashed_password": new_user_data.hashed_password,
        "access_token": access_token,
        "token_type": "bearer",
    }

# Ruta para agregar recetas a favoritos
@app.post("/create-favorite-recipes")
async def create_favorite_recipes(recipe_data: FavoriteRecipeCreate, current_user: User = Depends(get_current_user), db_connection: MySQLConnection = Depends(get_db)):
    # Verificar que el usuario que intenta agregar la receta es el propietario
    if current_user.user_id != recipe_data.user_id:
        raise HTTPException(status_code=403, detail="Permission denied. You can only add recipes to your own favorites.")

    # Agregar la receta a favoritos
    favorite_recipe = create_favorite_recipes(db_connection, user_id=recipe_data.user_id, recipe_id=recipe_data.recipe_id)

    return {"message": "Recipe added to favorites successfully", "favorite_recipe": favorite_recipe}

# Ruta para ver recetas favoritas
@app.get("/see-favorite-recipes", response_model=list[FavoriteRecipe])
async def see_favorite_recipes(current_user: User = Depends(get_current_user), db_connection: MySQLConnection = Depends(get_db)):
    # Obtener las recetas favoritas del usuario actual
    favorite_recipes = see_favorite_recipes(db_connection, user_id=current_user.user_id)

    return favorite_recipes

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)
