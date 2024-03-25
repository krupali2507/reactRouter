import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/contact.jsx";
import Github from "./components/Github/Github.jsx";
import { githubInfoLoader } from "./components/Github/Github.jsx";
import Home from "./components/Home/Home.jsx";
import Users from "./components/Users/User.jsx";
import "./index.css";
import Layout from "./Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="users/:id" element={<Users />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
      <Route path="contact-us" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
