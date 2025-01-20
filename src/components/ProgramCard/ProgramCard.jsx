import React, { useState, useEffect } from 'react';
import style from './ProgramCard.module.scss';
import { useGet } from '../../hooks/useGet';

export const ProgramCard = () => {
  const [stages, setStages] = useState([]);
  const [events, setEvents] = useState([]);

  // Fetch stages using custom hook
  const {
    data: stageData,
    error: stageError,
    isLoading: isStageLoading,
  } = useGet('https://api.mediehuset.net/mediesuset/stages');

  // Fetch events using custom hook
  const {
    data: eventData,
    error: eventError,
    isLoading: isEventLoading,
  } = useGet('https://api.mediehuset.net/mediesuset/events');

  useEffect(() => {
    if (stageData?.items) {
      setStages(stageData.items);
    }
    if (eventData?.items) {
      setEvents(eventData.items);
    }
  }, [stageData, eventData]);

  if (isStageLoading || isEventLoading) return <p>Loading...</p>;
  if (stageError || eventError) return <p>Error: {stageError || eventError}</p>;

  return (
    <div className={style.programContainer}>
      {stages.map((stage, index) => (
        <div key={stage.id} 
        className={`${style.stageCard} ${
          index === 0
            ? style.redStage
            : index === 1
            ? style.blueStage
            : index === 2
            ? style.greenStage
            : index === 3
            ? style.violetStage
            : ""
        }`}>
          <h2 className={style.stageTitle}>{stage.name.toUpperCase()}</h2>
          <div className={style.eventsList}>
            {events
              .filter((event) => event.stage_name === stage.name)
              .slice(0, 3)
              .map((event) => (
                <div key={event.id} className={style.eventItem}>
                  <p className={style.eventTime}>
                    {event.datetime.slice(11, 16)} 
                  </p>
                  <p className={style.eventTitle}>{event.title}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
