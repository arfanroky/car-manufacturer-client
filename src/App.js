import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Authentication/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import BusinessSummary from './Pages/HomePage/BusinessSummary';
import Home from './Pages/HomePage/Home';
import Machinery from './Pages/HomePage/Machinery';
import Login from './Pages/LoginPage/Login';
import SignUp from './Pages/LoginPage/SignUp';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/machinery" element={<Machinery />} />
        <Route path="/business-summary" element={<BusinessSummary />} />

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        ></Route>

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
