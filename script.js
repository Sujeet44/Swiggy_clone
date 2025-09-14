import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body"
import Header from "./src/components/Header";
import { RouterProvider,createBrowserRouter,Outlet } from "react-router-dom";
import Error from "./src/components/Error";
import About from "./src/components/About";
import AboutUs from "./src/components/AboutUs";
import appStore from "./src/utils/AppStore";
import { Provider } from "react-redux";
import Cart from "./src/components/Cart";
import SignIn from "./src/components/SignIn";
import { Link } from "react-router-dom";

const Grocery = lazy(()=>import('./src/components/Grocery'));


const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="main-container">
      <Header />
      <Outlet/>
    </div>
    </Provider>
  );
};

const approuter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/restaurants/:resId",
        element:<About/>,
        errorElement:<Error/>
      },
      {
        path:"/about",
        element:<AboutUs/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h2> loading....</h2>}><Grocery/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/signin",
        element:<SignIn/>
      }
    ],
    errorElement:<Error/>
  }
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>);
