# LeadGen - Lead Generation Web Application

A modular, extensible lead generation framework built with React and Express.

## Features
- Search leads by Country, State, City, and Zip Code
- Optional SOCKS5 proxy support
- Results table displaying: Full Name, Email, Phone, Street Address
- Modular architecture ready for feature expansion
- Responsive UI with 1100px container width
- Header and Footer navigation

## Project Structure
```
leadgen/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── LeadForm.jsx
│   │   │   └── LeadResults.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.html
│   └── package.json
├── backend/
│   ├── index.js
│   └── package.json
└── README.md
```

## Setup Instructions

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd backend
npm install
node index.js
```

Backend runs on `http://localhost:3001`
Frontend runs on `http://localhost:5173` (Vite default)

## Extensibility
This framework is designed for easy expansion:
- Add new menu items in `Header.jsx`
- Create new components in `components/` directory
- Add new API endpoints in `backend/index.js`
- Integrate legitimate data sources as they become available

## Educational Purpose
Built for educational purposes to understand web application architecture, API integration, and data handling.

## Future Integrations
- Licensed data provider APIs
- Advanced filtering options
- Export functionality (CSV, PDF)
- User authentication
- Search history
