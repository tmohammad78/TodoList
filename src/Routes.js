import React from "react";

const Main = React.lazy(() => import("./components/Main"));
const Application = React.lazy(() => import("./components/Application"));

const HowPage = React.lazy(() => import("./components/Pages/HowPage"));
const Template = React.lazy(() => import("./components/Pages/Template"));
const Home = React.lazy(() => import("./components/Pages/Home"));
const Login = React.lazy(() => import("./components/Portal/Login"));
const Signup = React.lazy(() => import("./components/Portal/Signup"));

// import Home from "./components/Pages/Home";
// import Template from "./components/Pages/Template";
// import HowPage from "./components/Pages/HowPage";
// import Application from "./components/Application";
// import Main from "./components/Main";
// import Login from "./components/Portal/Login";
// import Signup from "./components/Portal/Signup";
// const Errorpage = React.lazy(() => import("./components/Errorpage"));

export const routes = [
  {
    path: "/main",
    component: Main,
    routes: [
      {
        path: "/main/home",
        component: Home
      },
      {
        path: "/main/how",
        component: HowPage
      },
      {
        path: "/main/template",
        component: Template
      },
      {
        path: "/main/login",
        component: Login
      },
      {
        path: "main/signup",
        component: Signup
      }
    ]
  },
  {
    path: "/App",
    component: Application
  }
];
