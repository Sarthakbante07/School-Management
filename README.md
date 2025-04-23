# 🏫 School Management API

A beginner-friendly project using **Node.js**, **Express.js**, and **MySQL** to manage school data. This API allows users to:

- ✅ Add new schools with name, address, latitude, and longitude.
- 📍 List schools sorted by their proximity to the user’s location (latitude & longitude).

---

## 📁 Project Structure
  school-management/ ├── db.js # MySQL connection configuration ├── routes/ │ └── school.js # All API routes ├── app.js # Main server setup ├── package.json └── README.md # Project documentation


---

## ⚙️ Tech Stack

- **Backend:** Node.js + Express.js  
- **Database:** MySQL  
- **Testing:** Postman  
- **Deployment:** Render / Railway / Any Node.js Hosting

---

## 🚀 How to Run the Project

### 1. Clone the Repo

```bash
git clone https://github.com/Sarthakbante07/School-Management.git
cd School-Management:



3. Create MySQL Database and Table
Log in to MySQL and run:

```bash
CREATE DATABASE school_db;

USE school_db;

CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  address VARCHAR(255),
  latitude FLOAT,
  longitude FLOAT
);
```
