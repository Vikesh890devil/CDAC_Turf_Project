import * as React from "react";
import {createBrowserRouter,} from "react-router-dom";
import App from "./components/App";
import Home from "./components/Home";
import Register from "./components/Register";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Error404 from "./components/Error404";
import Book from "./components/Book";
import Login from "./components/Login";
import Ground from "./components/Ground";
import GroundTable from "./components/GroundTable";
import MyBooking from "./components/MyBooking";
import AllBooking from "./components/AllBooking";
import Displayallusers from "./components/Displayallusers";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
          {
            path:"/",
            element:<Home />
          },
          {
            path:"/register",
            element:<Register />
          },
          {
            path:"/login",
            element:<Login/>
          },
          {
            path:"/services",
            element:<Service />
          },
          {
            path:"/about",
            element:<About />
          },
          {
            path:"/contact",
            element:<Contact />
          },
          {
            path:"/book",
            element:<Book />
          },
          {
            path:"/error",
            element:<Error404/>
          },
          {
            path:"/ground",
            element:<Ground/>
          },
          {
            path:"/groundTable",
            element:<GroundTable/>
          },
          {
            path:"/myBooking",
            element:<MyBooking/>
          },
          {
            path:"/allBooking",
            element:<AllBooking/>
          },
          {
            path:"/displayallusers",
            element:<Displayallusers/>
          }
        ]
    }
]);
export default router;