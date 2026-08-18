# E-commerce Platform for Digital Products

A full-stack e-commerce website for selling game accounts, digital subscriptions (AI tools), and gift cards. Focused on the Persian market.

## Project Structure

```
├── backend/          # Django + DRF API
│   ├── core/         # Django project settings
│   ├── .env          # Environment variables
│   └── requirements.txt
└── frontend/         # Next.js App Router
    ├── app/          # Next.js app router pages
    ├── components/   # React components
    ├── lib/          # Utility functions & API client
    └── .env.local    # Environment variables
```

## Prerequisites

- Python 3.10+
- Node.js 18+
- PostgreSQL 14+

## Backend Setup (Django)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure environment variables:
   - Copy `.env` and update the values:
     ```bash
     cp .env.example .env  # Or edit .env directly
     ```
   - Update database credentials in `.env`

5. Set up PostgreSQL database:
   ```sql
   CREATE DATABASE ecommerce_db;
   ```

6. Run migrations:
   ```bash
   python manage.py migrate
   ```

7. Create a superuser:
   ```bash
   python manage.py createsuperuser
   ```

8. Start the development server:
   ```bash
   python manage.py runserver
   ```

The API will be available at `http://localhost:8000`

## Frontend Setup (Next.js)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Edit `.env.local` if needed (default is set to `http://localhost:8000`)

4. Start the development server:
   ```bash
   npm run dev
   ```

The frontend will be available at `http://localhost:3000`

## Features

### Backend
- Django REST Framework with pagination
- CORS configured for Next.js frontend
- PostgreSQL database with environment-based configuration
- Timezone set to Asia/Tehran for Persian market

### Frontend
- Next.js 15+ with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- RTL-ready for Persian language support
- Pre-configured API client for backend communication

## Development

### Running Both Services

Open two terminal windows:

**Terminal 1 (Backend):**
```bash
cd backend
source venv/bin/activate
python manage.py runserver
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

## Environment Variables

### Backend (.env)
- `SECRET_KEY`: Django secret key
- `DEBUG`: Debug mode (True/False)
- `DB_NAME`: PostgreSQL database name
- `DB_USER`: PostgreSQL username
- `DB_PASSWORD`: PostgreSQL password
- `DB_HOST`: Database host
- `DB_PORT`: Database port
- `FRONTEND_URL`: Frontend URL for CORS

### Frontend (.env.local)
- `NEXT_PUBLIC_API_URL`: Backend API URL

## License

Private - All rights reserved
