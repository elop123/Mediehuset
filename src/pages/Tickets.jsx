import React, { useState, useEffect } from 'react';
import { TicketCard } from '../components/TicketCard/TicketCard';
import { Title } from '../components/Title/Title';
import { HeaderImage } from '../components/HeaderImage/HeaderImage';

export const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const url = `https://api.mediehuset.net/mediesuset/tickets`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch the tickets');
        }
        return res.json();
      })
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setTickets(data.items);
        } else {
          setError('No tickets found');
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  // Filter tickets by type
  const partoutTickets = tickets.filter((item) => item.type === 'partout');
  const singleTickets = tickets.filter((item) => item.type === 'single');

  if (loading) {
    return <p>Loading tickets...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <HeaderImage imageFilename="crowd1-foto-colourbox.jpg" />
      <Title title="BILLETER" />
      <TicketCard title="PARTOUT BILLET - ALLE DAGE" tickets={partoutTickets} />
      <TicketCard title="ENKELTBILLETER" tickets={singleTickets} />
    </>
  );
};
