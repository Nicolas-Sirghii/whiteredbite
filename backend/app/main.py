from fastapi import FastAPI
from app.routers.message import router as message_router

app = FastAPI()

# Register routes
app.include_router(message_router, prefix="/api")