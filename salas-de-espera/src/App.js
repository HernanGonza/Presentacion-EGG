// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseSelect from "./components/CourseSelect";
import CourseContent from "./components/CourseContent";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Bienvenidos</h1>
        <CourseSelect />
        <Routes>
          <Route path="/" element={<p>Selecciona un curso para comenzar.</p>} />
          <Route path="/courses/:courseId" element={<CourseContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
