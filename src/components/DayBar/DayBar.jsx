import React, { useState } from 'react';
import style from './DayBar.module.scss';

export const DayBar = () => {
  const days = ['Onsdag', 'Torsdag', 'Fredag', 'Lørdag']; 
  const [selectedDay, setSelectedDay] = useState('Torsdag'); 

  
  const handleDayClick = (day) => {
    setSelectedDay(day);
   
  };

  return (
    <div className={style.dayFilter}>
      {days.map((day) => (
        <button
          key={day}
          className={selectedDay === day ? style.active : ''}
          onClick={() => handleDayClick(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
};