# PULSE backend

The backend is built with FastAPI.

## Local setup

1. Create and activate a Python virtual environment.
2. Install dependencies with `pip install -r requirements.txt`.
3. Copy `.env.example` to `.env` and adjust values if needed.
4. Start the API from this directory with `uvicorn app.main:app --reload`.

The API runs at `http://localhost:8000`.
Interactive API documentation is available at `http://localhost:8000/docs`.

## Initial endpoint

- `GET /api/health` — confirms that the API is running.

The database and product endpoints will be added after the data model is agreed.
