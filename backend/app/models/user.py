from pydantic import BaseModel, EmailStr
from typing import Optional

# Modelo Pydantic para la creación de usuarios
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    hashed_password: str
    confirm_password: Optional[str] = None

# Modelo Pydantic para representar la entidad de usuario
class User(UserCreate):
    user_id: int

# Modelo Pydantic para representar la entidad de usuario con contraseña cifrada
class UserDB(User):
    pass

# Modelo Pydantic para la respuesta al crear un nuevo usuario
class UserCreateResponse(BaseModel):
    user_id: int
    username: str
    email: str
    access_token: str
    token_type: str
