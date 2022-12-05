import React from "react";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Sorry } from './components/Sorry';

const router = createBrowserRouter([
  {
    path: "/",
    element: Home(),
  },
  {
    path: "/nt-admin",
    element: About(),
  }
]);

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router}/>
      </header>
    </div>
  );
}

function Home() {
  return (
    <>
      <h1>We're sorry.</h1>
      <Sorry />
    </>
  );
}

function About() {
  return <h2>About</h2>;
}
