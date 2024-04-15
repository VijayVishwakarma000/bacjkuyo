import { useState } from "react";
import Sidebar from "./components/Sidebar.tsx";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Createusers from "./components/Createusers";
import ActiveUsers from "./pages/ActiveUsers.tsx";
import Checkin from "./pages/Checkin.tsx";

function App() {
  return (
    <>
      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="grow">
          <Routes>
            <Route path="/createusers" element={<Createusers />} />
            <Route path="/activeusers" element={<ActiveUsers />} />
            <Route path="/checkin" element={<Checkin />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
