import React from "react";

import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import Students from "./Students";
import Createstud from "./Createstud";
import Editstud from "./Editstud";
import Mentor from "./Mentor";
import Createteach from "./Createteach";
import Editteach from "./Editteach";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Content = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        {/* Nav bar */}
        <Navbar />
        {/* contents with routes */}
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/student" element={<Students />}>
              <Route path="newstudent" element={<Createstud />} />
              <Route path=":id" element={<Editstud />} />
            </Route>
            <Route path="/mentor" element={<Mentor />}>
              <Route path="newmentor" element={<Createteach />} />
              <Route path=":id" element={<Editteach />} />
            </Route>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Content;