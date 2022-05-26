
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./Shared/Navbar";
import Machinery from './Pages/HomePage/Machinery';
import BusinessSummary from './Pages/HomePage/BusinessSummary';
import Reviews from './Pages/HomePage/Reviews';
import { RequireAuth } from "./Authentication/RequireAuth";

import Dashboard from "./Pages/Dashboard/Dashboard";
import SignUp from "./Pages/LoginPage/SignUp";
import Login from "./Pages/LoginPage/Login";
import Footer from "./Shared/Footer";
import {Home} from './Pages/HomePage/Home';
import Purchase from "./Pages/HomePage/Purchase";
import 'react-toastify/dist/ReactToastify.css';
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddReview from "./Pages/Dashboard/AddReview";
import ManageOrders from "./Pages/Dashboard/ManageOrders";
import AddProduct from "./Pages/Dashboard/AddProduct";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageProducts from "./Pages/Dashboard/ManageProducts";
import NotFound from "./Shared/NotFound";
import Blog from "./Pages/HomePage/Blog";
import Gallery from "./Pages/HomePage/Gallery";

function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home />} />
        <Route path="/machinery" element={<Machinery />} />
        <Route path="/reviews" element={<Reviews />} />

        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile/>}></Route>
          <Route path="my-orders" element={<MyOrder/>}/>
          <Route path="add-review" element={<AddReview/>}/>

          <Route path="manage-orders" element={<ManageOrders/>}/>
          <Route path="add-product" element={<AddProduct/>}/>
          <Route path="make-admin" element={<MakeAdmin/>}/>
          <Route path="manage-products" element={<ManageProducts/>}/>
        </Route>

        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/gallery" element={<Gallery/>}/>

        <Route path='*' element={<NotFound/>}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
