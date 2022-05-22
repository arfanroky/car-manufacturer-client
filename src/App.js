
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Authentication/RequireAuth';
import Home from './Pages/HomePage/Home';
import Products from './Pages/HomePage/Products';
import Login from './Pages/LoginPage/Login';
import SignUp from './Pages/LoginPage/SignUp';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {
  return (
   <>
   <ToastContainer></ToastContainer>
   <Navbar/>

   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/home' element={<Home/>}/>

    <Route path='/products' element={
      <RequireAuth>
        <Products/>
      </RequireAuth>
    }></Route>




     <Route path='/sign-up' element={<SignUp/>}/>
     <Route path='/login' element={<Login/>}/>
   </Routes>

   <Footer/>
   </>
  );
}

export default App;
