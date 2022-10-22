import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../containers/dashboard/dashboard';
import Login from '../containers/login/login';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="*" element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
