from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

# Read env variables
DB_USER = os.getenv("MYSQL_USER", "app_user")
DB_PASSWORD = os.getenv("MYSQL_PASSWORD", "app_password")
DB_HOST = os.getenv("MYSQL_HOST", "mysql")
DB_NAME = os.getenv("MYSQL_DATABASE", "app_db")

# MySQL connection URL
DATABASE_URL = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}"

# Create engine
engine = create_engine(DATABASE_URL, pool_pre_ping=True)

# Session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base for models
Base = declarative_base()


# Dependency for FastAPI routes
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()