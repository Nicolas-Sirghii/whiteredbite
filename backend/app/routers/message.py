from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from sqlalchemy import text

router = APIRouter()


@router.get("/message")
def get_message(db: Session = Depends(get_db)):
    result = db.execute(text("SELECT content FROM messages LIMIT 1")).fetchone()

    if result:
        return {"message": result[0]}

    return {"message": "No message found in database"}