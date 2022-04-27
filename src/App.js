/** @format */

import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./AdminPanel/components/Login/Login";
import { useEffect } from "react";
import MainDashBord from "./AdminPanel/components/Dashbord/MainHome";
import AllUsers from "./AdminPanel/components/Users/AllUsers";
import OrderHome from "./AdminPanel/components/Orders/OrderHome";
import ViewOrder from "./AdminPanel/components/Orders/ViewOrder";
import ViewDoc from "./AdminPanel/components/Orders/ViewDoc";
import Agreements from "./AdminPanel/components/Aggrement/Agreements";
import Contact from "./AdminPanel/components/Contact/Contact";
import EditContact from "./AdminPanel/components/Contact/EditContact";
import UserSettings from "./AdminPanel/Settings/UserSettings";
import ForgotPassword from "./AdminPanel/components/ForgetPassword/ForgotPassword";

import EnterPassword from "./AdminPanel/components/ForgetPassword/NewPassword";
import OPTpage from "./AdminPanel/components/ForgetPassword/OTPpage";
import Categories from "./AdminPanel/components/Categories/Categories";
import Addcategories from "./AdminPanel/components/Categories/Addcategories";
import Editcategories from "./AdminPanel/components/Categories/Editcategories";
import SubCategories from "./AdminPanel/components/Categories/SubCategories";
import EditSubCategory from "./AdminPanel/components/Categories/EditSubCategory";
import AddSubCategory from "./AdminPanel/components/Categories/AddSubCategory";
import LeagelForm from "./AdminPanel/components/LegalForm/LeagelForm";
import ViewUserDetails from "./AdminPanel/components/Users/ViewUserDetails";
import ViewLegalForm from "./AdminPanel/components/Orders/ViewLegalForm";
import LoginPage from "./AdminPanel/components/Login&SignUp/LoginPage";
import EditUser from "./AdminPanel/components/Users/EditUser";
import AddBanner from "./AdminPanel/components/banner/AddBanner";
import Banner from "./AdminPanel/components/banner/Banner";
import ViewAgreements from "./AdminPanel/components/Aggrement/ViewAgreements";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Routes>
        {/* <-----------------Admin-Panel------------------>  */}
        <Route path="/" element={<Login />} />
        <Route path="/dashbord" element={<MainDashBord />} />
        <Route path="/order-list" element={<OrderHome />} />
        <Route path="/view-order" element={<ViewOrder />} />
        <Route path="/users" element={<AllUsers />} />
        <Route path="/view-doc" element={<ViewDoc />} />
        <Route path="/agreement" element={<Agreements />} />
        <Route path="/view-agreement" element={<ViewAgreements />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edit-contact" element={<EditContact />} />
        <Route path="/user-settings" element={<UserSettings />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/add-categories" element={<Addcategories />} />
        <Route path="/edit-categories" element={<Editcategories />} />
        <Route path="/details-subcategories" element={<SubCategories />} />
        <Route path="/edit-subcategory" element={<EditSubCategory />} />
        <Route path="/add-subcategory" element={<AddSubCategory />} />
        <Route path="/add-banner" element={<AddBanner />} />
        <Route path="/banners" element={<Banner />} />
        <Route path="/legal-form" element={<LeagelForm />} />
        <Route path="/view-user-Details" element={<ViewUserDetails />} />
        <Route path="/view-legel-form" element={<ViewLegalForm />} />
        <Route path="/edit-user" element={<EditUser />} />

        {/* password reset  */}

        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/otp" element={<OPTpage />} />
        <Route path="/newpassword" element={<EnterPassword />} />
      </Routes>
    </>
  );
}

export default App;
