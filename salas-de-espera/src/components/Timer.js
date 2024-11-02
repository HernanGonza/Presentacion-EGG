// src/components/Timer.js
import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(600); // Tiempo inicial en segundos (10 minutos)
  const [isRunning, setIsRunning] = useState(false); // Controla si el cronómetro está corriendo
  const timerRef = useRef(null);

  // Actualiza el tiempo restante cuando el cronómetro está corriendo
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  // Función para iniciar el cronómetro
  const startTimer = () => {
    setIsRunning(true);
  };

  // Función para pausar el cronómetro
  const pauseTimer = () => {
    setIsRunning(false);
  };

  // Función para reiniciar el cronómetro
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(600); // Reinicia a 10 minutos (600 segundos)
  };

  // Función para ajustar el tiempo hacia adelante o hacia atrás
  const adjustTime = (amount) => {
    setTimeLeft((prevTime) => Math.max(prevTime + amount, 0));
  };

  // Convierte los segundos en formato mm:ss
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>Tiempo restante: {formatTime(timeLeft)}</h2>
      <div>
        <button onClick={startTimer} disabled={isRunning}>Iniciar</button>
        <button onClick={pauseTimer} disabled={!isRunning}>Pausar</button>
        <button onClick={resetTimer}>Reiniciar</button>
        <button onClick={() => adjustTime(60)}>+1 minuto</button>
        <button onClick={() => adjustTime(-60)}>-1 minuto</button>
      </div>
    </div>
  );
};

export default Timer;
