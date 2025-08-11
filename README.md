# 🏥 Front Desk Health

**Front Desk Health** is a clinic front desk management system that enables staff to efficiently manage doctor profiles, appointments, and patient queues.  
Built with a **NestJS + MySQL** backend and **Next.js + Tailwind CSS** frontend, it provides a secure, modern interface for clinic operations.

---

## 🚀 Tech Stack

### **Backend**
- **NestJS** – Scalable Node.js framework for server-side applications
- **JWT Authentication** – Secure login and authorization for front desk staff
- **TypeORM** – ORM for managing MySQL database interactions
- **MySQL** – Relational database to store user, doctor, and appointment data

### **Frontend**
- **Next.js** – React framework for server-side rendering and static generation
- **Tailwind CSS** – Utility-first CSS framework for responsive UI

---

## 👥 Roles & Responsibilities

### **Front Desk Staff**
- **Manage Doctor Profiles** – Add, edit, or delete doctor profiles (specialization, gender, location, availability)
- **Appointment Management** – View, cancel, or reschedule appointments for all patients
- **Search & Filter** – Find doctors by specialization, location, and availability
- **View All Appointments** – Access a full list of appointments for any patient or doctor

---

## ✨ Key Features

### **Authentication**
- Secure login for front desk staff using JWT

### **Queue Management**
- Add walk-in patients to a queue with assigned numbers
- Update patient status (`Waiting`, `With Doctor`, `Completed`)
- Efficiently manage queue flow

### **Appointment Management**
- View available doctors and book appointments
- Reschedule or cancel existing appointments
- Track appointment status (`Booked`, `Completed`, `Cancelled`)

---

## 🖥 Frontend Pages

### **Front Desk Dashboard**
- Overview of doctors, patients, and appointments

### **Queue Management**
- List of patients in queue with queue number and status
- Update patient status in real time

### **Appointment Management**
- Display doctors and available time slots
- Book, cancel, or reschedule appointments

---

## 📂 Project Structure

Front-desk-health/  
│── backend/ # NestJS backend  
│ ├── src/  
│ ├── entities/  
│ ├── modules/  
│ ├── controllers/  
│ └── ...  
│── frontend/ # Next.js frontend  
│ ├── pages/  
│ ├── components/  
│ ├── styles/  
│ └── ...  
└── README.md  
---

## ⚙️ Installation & Setup

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/Vivek-1608/Front-desk-health.git
cd Front-desk-health
2️⃣ Backend Setup
cd backend
npm install
Create a .env file with:
env

DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=yourpassword
DATABASE_NAME=front_desk_health
JWT_SECRET=your_jwt_secret
Run migrations:
npm run typeorm migration:run

Start backend:
npm run start:dev

3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
🛠 API Endpoints (Sample)
Method	Endpoint	Description
POST	/auth/login	Staff login
GET	/doctors	List all doctors
POST	/appointments	Book an appointment
PATCH	/appointments/:id	Reschedule or cancel appointment
GET	/queue	Get patient queue
PATCH	/queue/:id/status	Update patient queue status

```

📜 License
This project is licensed under the MIT License.
