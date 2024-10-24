# Prescripto

Prescripto is a comprehensive healthcare appointment booking system that connects patients with trusted doctors. This project consists of three main components: a frontend for patients, an admin panel, and a backend server.

## Features

- User registration and authentication
- Doctor search and appointment booking
- User profile management
- Doctor dashboard for managing appointments
- Admin panel for managing doctors and appointments
- Secure payment integration with Razorpay

## Tech Stack

- Frontend: React.js, Tailwind CSS
- Admin Panel: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- File Storage: Cloudinary
- Payment Gateway: Razorpay

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- MongoDB
- Cloudinary account
- Razorpay account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/tusharpardhe2018/Doctor-Patient-Portal.git
2. cd prescripto
3. Install dependencies for all components:
   ```bash
   cd frontend && npm install cd ../admin && npm install cd ../backend && npm install
4. Set up environment variables:
Create `.env` files in the `frontend`, `admin`, and `backend` directories with the necessary environment variables (refer to the sample.env files in each directory).
5. Start the development servers:
   ```bash
   In the backend directory
   npm run server
   
   In the frontend directory
   npm run dev

   In the admin directory
   npm run dev


## Project Structure

- `/frontend`: React.js frontend for patients
- `/admin`: React.js admin panel for managing doctors and appointments
- `/backend`: Node.js/Express.js server
- `/backend/models`: MongoDB schema definitions
- `/backend/controllers`: Request handlers
- `/backend/middleware`: Custom middleware functions

## API Endpoints

- `/api/user`: User-related endpoints (registration, login, profile management)
- `/api/doctor`: Doctor-related endpoints (list, availability, appointments)
- `/api/admin`: Admin-related endpoints (add/manage doctors, view appointments)

## Deployment

The project is set up for deployment on Vercel. Refer to the `vercel.json` file in the backend directory for configuration details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [React.js](https://reactjs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cloudinary](https://cloudinary.com/)
- [Razorpay](https://razorpay.com/)
