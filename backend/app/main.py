from fastapi import FastAPI
import mysql.connector
import time

from app.config import *

app = FastAPI()


def get_db_connection():

    while True:
        try:
            connection = mysql.connector.connect(
                host=DB_HOST,
                port=DB_PORT,
                user=DB_USER,
                password=DB_PASSWORD,
                database=DB_NAME
            )

            return connection

        except Exception as e:
            print("Waiting for MySQL...")
            print(e)

            time.sleep(3)


@app.get("/message")
def get_message():

    connection = get_db_connection()

    cursor = connection.cursor()

    cursor.execute("SELECT message FROM messages LIMIT 1")

    result = cursor.fetchone()

    cursor.close()
    connection.close()

    return {"message": result[0]}