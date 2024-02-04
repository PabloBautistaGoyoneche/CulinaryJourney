from pydantic import BaseModel

# Modelo Pydantic para representar la estructura de datos del token
class Token(BaseModel):
    access_token: str
    token_type: str
