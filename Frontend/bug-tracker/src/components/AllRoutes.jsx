import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "../Pages/AuthRoute";
import ChatRoute from "../Pages/ChatRoute";
import TrackerRoute from "../Pages/TrackerRoute";


export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthRoute/>} />
      <Route path="/tracker" element={<TrackerRoute/>} />
      <Route path="/chat" element={<ChatRoute/>} />
    </Routes>
  );
};




