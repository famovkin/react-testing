import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import Users from './users/Users';
import UserDetailPage from './pages/UserDetailPage';

function App() {
  return (
    <>
      <Link to="/" data-testid="main-link">
        main
      </Link>
      <Link to="/about" data-testid="about-link">
        about
      </Link>
      <Link to="/users" data-testid="users-link">
        users
      </Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
