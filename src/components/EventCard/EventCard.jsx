
import React, { useState, useEffect } from 'react';
import style from './EventCard.module.scss';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


export const EventCard = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const url = `https://api.mediehuset.net/mediesuset/events`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch the events');
        }
        return res.json();
      })
      .then((data) => {
        if (data.items) {
          setEvents(data.items);
        } else {
          setError('No events found');
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const stageColors = {
    "Rød scene": style.redStage,
    "Blå scene": style.blueStage,
    "Grøn scene": style.greenStage,
    "Lilla scene": style.purpleStage,
  };

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

   // Function to get the day of the week
   const getDayOfWeek = (datetime) => {
    const days = ['Søndag', 'Mandag', 'Tiersdag', 'Onsdag', 'Thorsdag', 'Fredag', 'Lørdag'];
    const date = new Date(datetime);
    return days[date.getDay()]; 
  };

  if (loading) {
    return <p>Loading events...</p>;
  }

  if (error) {
    return <p >{error}</p>;
  }

  return (
    <>
      <section className={style.eventGrid}>
        {events.slice(1, 10).map((event) => {
          const stageClass = stageColors[event.stage_name] || style.defaultStage;

          return (
            <article
              key={event.id}
              className={`${style.eventCard} ${stageClass}`}
              onClick={() => handleCardClick(event)}
            >
              <img className={style.eventImage} src={event.image} alt={event.title} />
              <h3 className={style.eventTitle}>{event.title}</h3>
              <p className={style.eventTime}>
              {getDayOfWeek(event.datetime)} kl. {event.datetime.slice(11, 16)}</p>
            </article>
          );
        })}
      </section>
   {/* Modal */}
      {isModalOpen && selectedEvent && (
       <div className={style.modalBackdrop} onClick={handleCloseModal}>
       <div
         className={style.modalContent}
         // onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside
       >
         <button className={style.closeButton} onClick={handleCloseModal}>
           ×
         </button>
         <div className={style.modalHeader}>
           <div className={style.stageInfo}>
             {selectedEvent.stage_name} KL. {selectedEvent.datetime.slice(0, 16).split(' ')[1]}
           </div>
         </div>
         <div className={style.modalBody}>
           <div className={style.modalContainer}>
             <img className={style.modalImage} src={selectedEvent.image} alt={selectedEvent.title} />
             <div className={style.modalText}>
               <h2 className={style.modalTitle}>{selectedEvent.title}</h2>
               <p>
                 {selectedEvent.description.slice(0, 100)
                   ? selectedEvent.description.slice(0,230)
                   : 'No description available.'}
               </p>
             </div>
           </div>
         </div>
         <div className={style.modalFooter}>
           
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook /> 
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter /> 
          </a>
         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
         <FaInstagram /> 
         </a>
         </div>
       </div>
     </div>
     
      )}
    </>
  );
};
