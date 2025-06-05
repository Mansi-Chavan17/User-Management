# Residents Book

A full-stack web application for managing community residents' information, built with React for the frontend and Node.js/Express for the backend.

## Features

- Add new residents with their personal information
- Display residents in a card layout
- Store resident information, including:
  - First and last name
  - Role/Title
  - Profile image
  - Social media links (LinkedIn, Twitter)

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── App.jsx         # Main application component
│   │   ├── context/        # React context for state management
│   │   └── assets/         # Static assets
│   └── public/             # Public assets
└── server/                 # Backend Node.js application
    ├── controllers/        # Request handlers
    ├── models/             # Database models
    ├── routes/             # API routes
    └── config/             # Configuration files
```

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository.
2. Install backend dependencies:
   ```bash
   cd server
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the server directory.
   - Add the required environment variables:
     ```
     PORT=8000
     MONGODB_URI=your_mongodb_connection_string
     ```

## Running the Application

1. Start the backend server:
   ```bash
   cd server
   npm start
   ```
2. Start the frontend development server:
   ```bash
   cd client
   npm run dev
   ```

## API Endpoints

- **GET** `/profiles/get-user` - Get all residents
- **POST** `/profiles/add-user` - Add a new resident

### Request Body Format for Adding a Resident

```json
{
    "firstName": "string",   // Required
    "lastName": "string",    // Required
    "role": "string",        // Required
    "image": "string",       // Optional
    "linkedIn": "string",    // Optional
    "twitter": "string"      // Optional
}
```

## Technologies Used

### Frontend:

- React
- Vite
- Axios
- Context API for state management

### Backend:

- Node.js
- Express
- MongoDB
- Mongoose
