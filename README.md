# User Management Dashboard 🚀

A modern, responsive CRUD (Create, Read, Update, Delete) web application built with **React.js** and **Vite**. This application demonstrates efficient state management, API integration, and a polished UI with glassmorphism effects.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B33030?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

## Key Features

- **Full CRUD Operations**: Seamlessly create, read, update, and delete user data.
- **Real-time Search**: Instantly filter users by name or email.
- **Smart Pagination**: optimized pagination limiting visible pages to 5 with ellipsis for better UX.
- **Responsive Design**: Fully responsive layout that adapts to Mobile (Card View), Tablet, and Desktop.
- **Modern UI/UX**: clean interface with glassmorphism, skeletons loading states, and smooth transitions.
- **Toasts Notifications**: Meaningful feedback for every action (success/error).

## Tech Stack

- **Framework**: [React](https://react.dev/) (Vite)
- **Styling**: Vanilla CSS3 (Variables, Flexbox, Grid, Glassmorphism)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Notifications**: [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (if used) / SVG

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-crud-dashboard.git
   cd react-crud-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the app.

## 📂 Project Structure

```bash
src/
├── components/      # Reusable UI components (UserList, Skeleton, Pagination, etc.)
├── pages/          # Page components (AddUser, etc.)
├── services/       # API service functions (Axios setup)
├── App.jsx         # Main application component with Routing
├── index.css       # Global styles and variables
└── main.jsx        # Entry point
```

## 🔒 Security Note

This project uses a public MockAPI endpoint for demonstration purposes. For production:
*   Replace the `API_URL` in `src/services/userService.js` with your real backend endpoint.
*   Use environment variables (`.env`) to store sensitive API URLs.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
