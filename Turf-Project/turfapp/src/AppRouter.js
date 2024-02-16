import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import MyBooking from "./userView/MyBooking";
import Book from "./components/Book";
import AllBooking from "./admin/AllBooking";
import Ground from "./admin/Ground";
import GroundTable from "./admin/GroundTable";
import Displayallusers from "./components/Displayallusers";
import Error404 from "./components/Error404";


const router = createBrowserRouter([
    {
        path:"/",
        
        children:[
          {
            path:"/",
            element:<Home />
          },
          {
            path:"/about",
            element:<About />
          },
          {
            path:"/services",
            element:<Service />
          },
          {
            path:"/contact",
            element:<Contact />
          },
          {
            path:"/login",
            element:<Login />
          },
          {
            path:"/register",
            element:<Register />
          },
          {
            path:"/myBooking",
            element:<MyBooking />
          },
          {
            path:"/book",
            element:<Book />
          },
          {
            path:"/allBooking",
            element:<AllBooking />
          },
          {
            path:"/groundDetail",
            element:<Ground />
          },
          {
            path:"/groundTable",
            element:<GroundTable />
          },
          {
            path:"/displayallusers",
            element:<Displayallusers />
          },
          {
            path:"/error",
            element:<Error404 />
          },


          

          
        ]
    }
]);
export default router;