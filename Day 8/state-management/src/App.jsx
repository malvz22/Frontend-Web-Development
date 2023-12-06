/* eslint-disable react/jsx-no-target-blank */
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import Login from "./Pages/Login";
import PropsPage from "./Pages/props";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/props" element={<PropsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
