import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
<script src="./components/home/Home.jsx"></script> 

import Footer from "./components/layout/Footer";
<script src="./components/layout/Footer.jsx"></script> 

import Header from "./components/layout/Header";
<script src="./components/layout/Header.jsx"></script> 

import Contact from "./components/contact/Contact";
<script src="./components/contact/contact.jsx"></script> 

// Add module imports for CART

// Add module imports for Shipping

import Login from "./components/login/Login";
<script src="./components/login/Login.jsx"></script> 

import Profile from "./components/profile/Profile";
<script src="./components/profile/Profile.jsx"></script> 

// Add module imports for MY ORDERS

import OrderDetails from "./components/myOrders/OrderDetails";
<script src="./components/myOrders/OrderDetails.jsx"></script> 

import About from "./components/about/About";
<script src="./components/about/About.jsx"></script> 




import "./styles/app.scss";
<link rel="stylesheet" href="./styles/app.scss"/>

import "./styles/header.scss";
<link rel="stylesheet" href="./styles/heder.scss"/>
import "./styles/home.scss";
<link rel="stylesheet" href="./styles/home.scss"/>

import "./styles/founder.scss";
<link rel="stylesheet" href="./styles/founder.scss"/>

import "./styles/menu.scss";
<link rel="stylesheet" href="./styles/menu.scss"/>

import "./styles/footer.scss";
<link rel="stylesheet" href="./styles/footer.scss"/>

import "./styles/contact.scss";
<link rel="stylesheet" href="./styles/contact.scss"/>

import "./styles/cart.scss";
<link rel="stylesheet" href="./styles/cart.scss"/>

import "./styles/shipping.scss";
<link rel="stylesheet" href="./styles/shipping.scss"/>

import "./styles/login.scss";
<link rel="stylesheet" href="./styles/login.scss"/>

import "./styles/profile.scss";
<link rel="stylesheet" href="./styles/profile.scss"/>

import "./styles/table.scss";
<link rel="stylesheet" href="./styles/table.scss"/>

import "./styles/orderDetails.scss";
<link rel="stylesheet" href="./styles/orderDetailes.scss"/>

import "./styles/about.scss";
<link rel="stylesheet" href="./styles/about.scss"/>


function App() {
  return (
    <Router>
      <Header isAuthenticated={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
          //           Add the Route for CART
          <Route path="/cart" element={<Cart />} />

          //           Add the Route for SHIPPING
          <Route path="/shipping" element={<Shipping />} />

        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
         //           Add the Route for MY ORDERS
         <Route path="/myorders" element={<MyOrders />} />

        <Route path="/order/:id" element={<OrderDetails />} />
      
       

        
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
