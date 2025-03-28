# User Management System

## Project Overview
This project is a **User Management System** built with React that allows users to view, edit, and delete user data fetched from an API. The application includes pagination and a modal for editing user details. It also displays toast notifications when a user is deleted.

## Features
- Fetch and display users from an API
- Pagination to navigate between pages
- Edit user details in a modal
- Delete user data with a confirmation toast notification
- Logout functionality

## Technologies Used
- **React** (Frontend Framework)
- **Axios** (API Requests)
- **React Icons** (For UI Icons)
- **React Router** (For navigation)
- **React Toastify** (For displaying notifications)
- **Tailwind CSS** (For styling)

## Installation
1. Clone the repository:
   ```sh
   git clone [https://github.com/sonikakannan/EmployeWise-Assignment.git]
   cd EmployWise-Assignment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the application:
   ```sh
   npm start
   ```

## API Endpoint
The user data is fetched from:
```
https://reqres.in/api/users?page={page}&per_page=3
```

## Project Structure
```
├── src
│   ├── components
│   │   ├── UserCard.jsx
│   │   ├── Pagination.jsx
│   │   ├── EditUserModal.jsx
│   ├── pages
|   |   ├── LoginPage.jsx
│   │   ├── UsersPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│
├── public
│   ├── index.html
├── README.md
├── package.json
```

## Usage
- **View Users**: Users are displayed in a card layout.
- **Edit User**: Click on the edit icon to open a modal and update user details.
- **Delete User**: Click on the delete icon to remove a user (a toast notification appears on success).
- **Pagination**: Navigate between pages using the pagination buttons.
- **Logout**: Click the logout button to return to the home page.

## Screenshots
![User List Screenshot](https://via.placeholder.com/600x300?text=User+List)
![Edit Modal Screenshot](https://via.placeholder.com/600x300?text=Edit+Modal)

## Dependencies
- React
- React Router
- Axios
- React Icons
- React Toastify
- Tailwind CSS

## License
This project is licensed under the MIT License.

---
**Developed by:** sonika kannan.k

