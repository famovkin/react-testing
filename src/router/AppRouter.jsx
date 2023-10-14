import { Route, Routes } from 'react-router-dom';
import Users from '../components/users/Users';
import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import UserDetailPage from '../pages/UserDetailPage';
import ErrorPage from '../pages/ErrorPage';
import HelloWorld from '../pages/HelloWorld';
import UsersForTest from '../components/UsersForTest/UsersForTest';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/hello" element={<HelloWorld />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetailPage />} />
      <Route path="/users-test" element={<UsersForTest />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
