
# Full Stack Application (Laravel + React)

This project is a modern full-stack web application built with a **Laravel** backend (API) and a **React** frontend (Vite). It provides a robust foundation for scalable web development, featuring authentication, RESTful APIs, and a responsive user interface.

---

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Features

### Backend (Laravel)
- RESTful API with authentication
- User management (example: registration, login)
- Database migrations and seeders
- Eloquent ORM
- API routes (`routes/api.php`)
- Unit and feature tests

### Frontend (React + Vite)
- Modern React SPA (Single Page Application)
- Routing with React Router
- API integration with Axios
- Tailwind CSS for styling
- Component-based architecture

---

## Tech Stack

- **Backend:** Laravel (PHP)
- **Frontend:** React, Vite, Tailwind CSS
- **Database:** SQLite (default, can be changed)
- **API Client:** Axios

---

## Project Structure

```
├── app/                # Laravel backend (controllers, models, etc.)
├── routes/             # Laravel routes (api.php, web.php)
├── database/           # Migrations, seeders, factories
├── frontend/           # React frontend (src/, public/, etc.)
├── public/             # Public assets and entry points
├── resources/          # Blade templates, JS, CSS
├── tests/              # PHPUnit tests
├── package.json        # Backend JS dependencies (Vite, Tailwind)
├── phpunit.xml         # PHPUnit config
├── vite.config.js      # Vite config (backend)
└── ...
```

---

## Getting Started

### Prerequisites
- PHP >= 8.1
- Composer
- Node.js & npm

### Backend Setup (Laravel)
1. Install dependencies:
	```sh
	composer install
	```
2. Copy `.env.example` to `.env` and configure your environment variables.
3. Generate application key:
	```sh
	php artisan key:generate
	```
4. Run migrations and seeders:
	```sh
	php artisan migrate --seed
	```

### Frontend Setup (React)
1. Navigate to the `frontend` directory:
	```sh
	cd frontend
	```
2. Install dependencies:
	```sh
	npm install
	```

---

## Running the Application

### Start Backend (Laravel)
```sh
php artisan serve
```

### Start Frontend (React)
```sh
cd frontend
npm run dev
```

The frontend will be available at [http://localhost:5173](http://localhost:5173) (default Vite port).

---

## Testing

### Backend (PHPUnit)
```sh
php artisan test
```

### Frontend (ESLint, etc.)
```sh
cd frontend
npm run lint
```

---

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
