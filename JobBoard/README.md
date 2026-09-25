# 🚀 JOBLY

### End-to-End Recruitment & Career Platform

> **An end-to-end recruitment platform designed to streamline job discovery, candidate engagement, application management, employer operations, and data-driven career workflows.**

Jobly is a full-stack recruitment platform connecting candidates and employers through a structured recruitment workflow. It provides job discovery, advanced filtering, secure authentication, job applications, resume handling, saved jobs, job alerts, notifications, employer operations, and candidate/employer dashboards.

---

## ✨ Core Features

### 👨‍💻 Candidate Experience

- 🔎 Job discovery with keyword search
- 📍 Location-based search and filtering
- 🏷️ Category, experience, job type, and work-location filtering
- 📄 Detailed job information
- 📝 Online job applications
- 📎 Resume upload with PDF, DOC, and DOCX support
- 💾 Saved jobs
- 🔔 Configurable job alerts
- 📬 Application notifications
- 📊 Application tracking
- 👤 Candidate dashboard

### 🏢 Employer Experience

- 🔐 Employer authentication
- 🏢 Company management
- 📢 Job creation and publishing
- 📥 Application management
- 🔄 Application status management
- 📊 Recruitment statistics
- 👥 Candidate/application visibility
- 📈 Employer dashboard

### 🔐 Security

- 🎫 JWT-based authentication
- 🛡️ Role-based authorization
- 🔒 bcrypt password hashing
- 🔑 Protected API routes
- ⚙️ Environment-based secret management
- 📎 Resume upload validation
- 🚫 Duplicate application prevention
- 🔗 Database-level constraints

---

## 🛠️ Technology Stack

### 🎨 Frontend

- ⚛️ **React.js** — Component-based UI architecture
- ⚡ **Vite** — Development and build tooling
- 🧭 **React Router DOM** — Client-side routing
- 🎨 **CSS3** — Responsive interface styling
- 🖼️ **Lucide React** — UI icons
- 🌐 **Fetch API** — Client-server communication
- 💾 **Local Storage** — Authentication/session persistence
- 👁️ **Intersection Observer API** — Scroll-based UI animations

### ⚙️ Backend

- 🟢 **Node.js** — Server-side runtime
- 🚂 **Express.js** — REST API framework
- 🐘 **PostgreSQL** — Relational database
- 🔌 **node-postgres (`pg`)** — PostgreSQL connectivity
- 🔐 **bcryptjs** — Password hashing
- 🎫 **JSON Web Token (JWT)** — Authentication
- 📎 **Multer** — File and resume upload handling
- ✉️ **Nodemailer** — Email communication
- 🌐 **CORS** — Cross-origin request handling
- ⚙️ **dotenv** — Environment configuration
- 🔄 **Nodemon** — Development server tooling

### 🗃️ Development & Version Control

- 🐙 **Git** — Version control
- 📦 **GitHub** — Repository hosting
- 🧪 **Thunder Client** — API testing
- 🐘 **pgAdmin 4** — PostgreSQL database management

---

## 🏗️ Application Architecture

`
                         ┌──────────────────────┐
                         │        JOBLY         │
                         │ Recruitment Platform │
                         └──────────┬───────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
                    ▼                               ▼
          ┌──────────────────┐             ┌──────────────────┐
          │  React Frontend  │             │  Express Backend │
          │                  │             │                  │
          │ Pages            │             │ Routes           │
          │ Components       │◄───────────►│ Controllers      │
          │ Dashboards       │    REST     │ Middleware       │
          │ Routing          │     API     │ Services         │
          └──────────────────┘             └────────┬─────────┘
                                                    │
                         ┌──────────────────────────┼─────────────────────┐
                         │                          │                     │
                         ▼                          ▼                     ▼
                 ┌──────────────┐          ┌──────────────┐      ┌──────────────┐
                 │ PostgreSQL   │          │ JWT / bcrypt │      │  Nodemailer  │
                 │              │          │              │      │              │
                 │ Data Layer   │          │ Security     │      │ Email Layer 
                 └──────────────┘          └──────────────┘      └──────────────┘
🗄️ Database Architecture

Jobly uses a relational PostgreSQL architecture built around the following entities:

users
   │
   ├── companies
   │      │
   │      └── jobs
   │            │
   │            └── applications
   │
   ├── saved_jobs
   │
   ├── job_alerts
   │
   └── notifications
Core Tables
users
companies
jobs
applications
saved_jobs
job_alerts
notifications

The database uses:

🔗 Foreign-key relationships
🔐 Unique constraints
🗑️ Cascading deletes
🕒 Timestamp tracking
📚 PostgreSQL array fields
🛡️ Role-based user records

🔄 Application Workflow
🔎 Discover Job
       ↓
📄 View Job Details
       ↓
📝 Submit Application
       ↓
📎 Resume + Cover Letter
       ↓
💾 Application Stored
       ↓
🏢 Employer Review
       ↓
┌────────────┬──────────────┬───────────┬────────┐
│  Applied   │ Shortlisted  │  Rejected │ Hired  │
└────────────┴──────────────┴───────────┴────────┘
       ↓
🔔 Notifications
       ↓
✉️ Email Communication

🔐 Authentication & Authorization

Jobly uses a token-based authentication architecture.

Registration
     ↓
Password Hashing
     ↓
PostgreSQL
     ↓
Login
     ↓
Credential Verification
     ↓
JWT Generation
     ↓
Authenticated Requests
     ↓
Role-Based Authorization
👥 User Roles

Candidate

Browse jobs
Save jobs
Apply for jobs
Create job alerts
Track applications
Access candidate dashboard

Employer

Manage companies
Create jobs
Publish opportunities
View applications
Update application statuses
Access employer dashboard

🔎 Job Discovery

The job search system supports:

🔍 Keyword search
📍 Location filtering
🏷️ Category filtering
💼 Employment type filtering
📊 Experience filtering
🏠 Work-location filtering
📄 Pagination
🔗 Server-side API retrieval

Search queries can operate across job titles, descriptions, company information, and skills.

💾 Saved Jobs

Candidates can maintain a personalized collection of job opportunities.

GET    /api/saved-jobs
POST   /api/saved-jobs/:jobId
DELETE /api/saved-jobs/:jobId

Database-level uniqueness prevents duplicate saved-job records.

🔔 Job Alerts

Candidates can configure alerts using criteria such as:

Keyword
Location
Category
Job type
GET    /api/job-alerts
POST   /api/job-alerts
PATCH  /api/job-alerts/:alertId/toggle
DELETE /api/job-alerts/:alertId

📬 Notifications & Email
🔔 Notifications

Jobly provides an internal notification system supporting:

Unread notifications
Individual read status
Mark-all-as-read
Notification deletion

✉️ Email

Nodemailer handles application-related email communication, including application confirmation and status updates.

Email credentials are stored through environment variables and excluded from version control.

📎 Resume Management

Resume uploads are processed using Multer.

Supported formats:

PDF
DOC
DOCX

The upload system includes:

📏 File-size restrictions
📁 Dedicated upload storage
🔒 Protected application routes
🗃️ Database-stored resume references

📊 Dashboards
👨‍💻 Candidate Dashboard

Provides:

Total applications
Saved jobs
Active job alerts
Unread notifications
Recent applications
Application status
🏢 Employer Dashboard

Provides:

Active jobs
Total applications
Shortlisted candidates
Hired candidates
Recent applications
Application management

🧩 REST API Architecture
🔑 Authentication
💼 Jobs
📝 Applications
💾 Saved Jobs
🔔 Job Alerts
📬 Notifications
📊 Dashboards

🏛️ Backend Structure

The backend follows a modular architecture separating routing, authorization, business logic, and persistence.

Routes
   ↓
Middleware
   ↓
Controllers
   ↓
Services / Utilities
   ↓
PostgreSQL

Project Structure
JobBoard/
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── data/
│       ├── images/
│       ├── layout/
│       ├── pages/
│       ├── services/
│       ├── App.jsx
│       ├── index.css
│       └── main.jsx
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── database/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── utils/
│   └── server.js
│
└── README.md

🛡️ Security Practices

Jobly incorporates multiple application-level security measures:

🔐 bcrypt password hashing
🎫 JWT authentication
👥 Role-based authorization
🚫 Protected API endpoints
🔒 Environment-based secrets
📎 Controlled file uploads
🧩 Database constraints
🚫 Duplicate application prevention
📁 Sensitive files excluded through .gitignore

Sensitive configuration such as database credentials, JWT secrets, and email credentials is never committed to the repository.

🔮 Future Scope
🤖 AI-assisted resume analysis
🧠 Intelligent candidate–job matching
📄 Automated resume parsing
🔍 Semantic job search
📊 Advanced recruitment analytics
📬 Automated job-alert emails
👤 Advanced candidate profiles
☁️ Production deployment
👩‍💻 Author

Kanishkaa Roy

B.Tech Computer Science & Engineering

🔗 GitHub: https://github.com/Kanishkaa171





