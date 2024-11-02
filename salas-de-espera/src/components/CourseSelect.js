// src/components/CourseSelect.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseSelect = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    const course = event.target.value;
    setSelectedCourse(course);
    if (course) {
      navigate(`/courses/${course}`);
      setSelectedCourse(""); // Restablece el select después de la navegación
    }
  };

  return (
    <div>
      <label htmlFor="course-select">Selecciona un curso:</label>
      <select id="course-select" value={selectedCourse} onChange={handleSelectChange}>
        <option value="">-- Elige un curso --</option>
        <option value="course1">Curso 1</option>
        <option value="course2">Curso 2</option>
      </select>
    </div>
  );
};

export default CourseSelect;
