import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';

function PomodoroTimer() {
  const [seconds, setSeconds] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
      
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(1500); // Reset to 25 minutes
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  const progressBarWidth = (seconds / 1500) * 100; 

  return (
    <div>
      <h1>Pomodoro Timer</h1>
      <div className="timer">{formatTime(seconds)}</div>
      <div className="progress" style={{ }}>
        
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progressBarWidth}%` }}
          aria-valuenow={progressBarWidth}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="buttons">
        <button type="button" className="btn btn-secondary" onClick={toggleTimer}>{isActive ? 'Pause' : 'Start'}</button>
        <button type="button" className="btn btn-secondary" onClick={resetTimer}>Reset</button>
      
      </div>
     
    </div>
  );
};

export default PomodoroTimer;