from mysql.connector import MySQLConnection
from passlib.hash import bcrypt
from jose import JWTError, jwt
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from db.operations import get_user_by_email
from db.connection import get_db

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

db_connection = get_db()

def verify_password(plain_password, hashed_password):
    return bcrypt.verify(plain_password, hashed_password)

def get_user(db_connection: MySQLConnection, email: str):
    return get_user_by_email(db_connection, email)


# Esta función crea un token JWT con el ID del usuario
def create_access_token(user_id: int, username: str, email: str):
    # Definir la información que se incluirá en el token (payload)
    payload = {
        "user_id": user_id,
        "username": username,
        "email": email
    }

    # Generar el token con el payload y una clave secreta
    token = jwt.encode(payload, "your-secret-key", algorithm="HS256")

    return token


def get_current_user(token: str = Depends(oauth2_scheme), db_connection: MySQLConnection = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, "your-secret-key", algorithms=["HS256"])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    user = get_user_by_email(db_connection, username)
    if user is None:
        raise credentials_exception
    return user

