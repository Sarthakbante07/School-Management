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
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

# Initialize npm and install dependencies
npm install

# Start the development server
nodemon app.js
```



## 3. Create a MySQL Database and Table
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

## 📬 API Endpoints

➕ POST /addSchool
Description: Adds a new school

Request Body:

```bash
{
  "name": "ABC School",
  "address": "123 Street, City",
  "latitude": 21.1458,
  "longitude": 79.0882
}
Success Response:
```

{
  "message": "School added successfully"
}

```bash

📍 GET /listSchools?lat=USER_LAT&lon=USER_LON
Description: Lists all schools sorted by distance from the user
```

Example: /listSchools?lat=21.1&lon=79.0

Response:

[
  {
    "id": 1,
    "name": "ABC School",
    "address": "123 Street",
    "distance": "2.35 km"
  },
  ...
]

## 📦 Postman Collection

Open Postman → Import
Use this shared link:
```
[[Insert your Postman Collection Link here]](https://www.postman.com/speeding-astronaut-807812/my-workspace/collection/3g4tlup/school-managemant?action=share&creator=29040178)
```

## The collection contains:

Example request for /addSchool
Example request for /listSchools


## 🌐 Live Deployment
Example live base URL (if deployed):
https://your-app-name.onrender.com

Test:
https://your-app-name.onrender.com/listSchools?lat=21.1&lon=79.0


## 👨‍💻 Author
Sarthak Bante
📧 GitHub: @Sarthakbante07


## 📜 License
Free to use for educational and learning purposes

