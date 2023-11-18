import  Counter  from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './features/auth/components/Signup';
import Cart from './features/cart/Cart';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductdetailPage from './pages/ProdcutdetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/Login",
    element: <LoginPage></LoginPage>,
  },

  {
    path: "/Signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/Cart",
    element: <CartPage></CartPage>,
  },

  {
    path: "/Checkout",
    element: <Checkout></Checkout>,
  },
  

  {
    path: "/ProductDetail",
    element:<ProductdetailPage></ProductdetailPage> ,
  },
]);


function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router} />
     
      
    </div>
  );
}

export default App;
