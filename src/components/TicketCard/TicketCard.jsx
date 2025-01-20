import React from 'react';
import style from './TicketCard.module.scss';

export const TicketCard = ({ title, tickets }) => {
  return (
    <section className={style.ticketContainer}>
      <h2 className={style.ticketTitle}>{title}</h2>
      {tickets && tickets.length > 0 ? (
        tickets.map((item) => (
          <div key={item.id} className={style.ticketStyle}>
            <p className={style.ticketType}>{item.name}</p>
            <div className={style.ticketDetails}>
              <p className={style.ticketPrice}>{item.price} DKK</p>
              <button
                className={style.ticketBtn}
                onClick={() => alert(`Ticket purchased: ${item.name}`)}
              >
                KØB BILLET
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No tickets available for this category.</p>
      )}
    </section>
  );
};
