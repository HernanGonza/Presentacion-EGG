// src/components/CourseContent.js
import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import Timer from "./Timer";
import { useParams } from "react-router-dom";
import Course1Data from "./courses/Course1Data";
import Course2Data from "./courses/Course2Data";

const CourseContent = () => {
  const { courseId } = useParams();

  // Obtener los datos específicos del curso
  const courseData = courseId === "course1" ? Course1Data : Course2Data;

  // useEffect para recargar el contenido cuando courseId cambie
  useEffect(() => {
    // Aquí podríamos incluir cualquier lógica de reinicio o configuración si es necesario
  }, [courseId]);

  return (
    <div>
      <Timer />
      <h2>{courseData.title}</h2>
      <Carousel>
        {courseData.images.map((image, index) => (
          <Carousel.Item key={index}>
            <img src={image.src} alt={image.alt} className="d-block w-100" />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <audio controls autoPlay loop>
        <source src={courseData.music} type="audio/mp3" />
        Tu navegador no soporta audio.
      </audio>
    </div>
  );
};

export default CourseContent;
