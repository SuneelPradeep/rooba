import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import SignupForm from './components/SignupForm.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App /> ,errorElement: <ErrorPage /> },
    {  path: "/form",
  element: <SignupForm />,errorElement: <ErrorPage />}, 
  // {  path: "/",
  // element: <App />,}, 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />
  ,
)
