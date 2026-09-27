# QUIZyou

A full-stack interactive quiz platform that allows users to create accounts, explore quizzes, create their own quizzes, test their knowledge, and view detailed results through a clean and responsive interface.

## Overview

QUIZyou is designed as a simple, engaging quiz experience with a modern frontend and a lightweight backend authentication system.

Users can browse a curated quiz library, search and filter quizzes by category, create custom quizzes, take quizzes one question at a time, and receive an automatically calculated result with answer-by-answer feedback.

The application also includes user registration and login backed by PostgreSQL, bcrypt password hashing, and JWT-based authentication.

## Features

### Authentication
- User registration and login
- PostgreSQL-based user storage
- Secure password hashing using bcrypt
- JWT-based authentication
- Duplicate email detection
- Form validation and authentication feedback

### Quiz Discovery
- Curated quiz library
- Multiple quiz categories
- Search quizzes by title or description
- Category-based filtering
- Difficulty indicators
- Question count display

### Quiz Creation
- Create custom quizzes
- Add multiple questions
- Add four answer options per question
- Select the correct answer
- Set quiz category and difficulty
- Save created quizzes locally

### Quiz Experience
- One-question-at-a-time interface
- Question progress tracking
- Previous and next navigation
- Question navigation indicators
- Answer selection
- Automatic score calculation

### Results
- Final score and percentage
- Correct and incorrect answer breakdown
- User-selected answers
- Correct answers for incorrect responses
- Option to retake a quiz
- Option to explore more quizzes

### Interface
- Responsive React interface
- Soft pink, white and sky-blue visual system
- Interactive hover states
- Smooth transitions and subtle animations
- Reusable navigation and footer components
- Responsive layouts for different screen sizes

## Tech Stack

### Frontend

- React.js
- Vite
- React Router
- JavaScript
- HTML5
- CSS3
- LocalStorage

### Backend

- Node.js
- Express.js
- PostgreSQL
- `pg`
- bcryptjs
- JSON Web Token (JWT)
- CORS
- dotenv

## Architecture

```text
QUIZyou/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── data/
│   │   │   └── defaultQuizzes.js
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── CreateQuiz.jsx
│   │   │   ├── Quizzes.jsx
│   │   │   ├── MyQuizzes.jsx
│   │   │   ├── TakeQuiz.jsx
│   │   │   └── Results.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── backend/
│   ├── server.js
│   ├── db.js
│   ├── .env
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md