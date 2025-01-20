import React from 'react'
import { useState, useEffect } from 'react';
import style from './CampCard.module.scss'
import { useNavigate } from 'react-router-dom';

export const CampCard = () => {
    const [camp, setCamp] = useState([]); 
    const [error, setError] = useState(); 
    const [loading, setLoading] = useState(true); 
    const navigate = useNavigate();

  
    const url = `https://api.mediehuset.net/mediesuset/camps`;
  
    useEffect(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch the camps');
          }
          return res.json();
        })
        .then((data) => {
          if (data.items && data.items.length > 0) {
            setCamp(data.items);
          } else {
            setError('No camps found');
          }
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, []);
  
    if (loading) {
      return <p>Loading news...</p>;
    }
  
    if (error) {
      return <p className={style.error}>{error}</p>;
    }
  
    return (
      <section className={style.campCard}>
        {camp.map((item) => (
          <article key={item.id} className={style.campStyle}>
            <h2 className={style.name}>{item.name}</h2>
            <p className={style.numPeople}>{item.num_people} PLADSER</p>
            <p className={style.description}>{item.description.slice(0,130)}...</p>
            {/* <p className={style.price}>{item.price}DKK</p> */}
            <div className={style.btns}>
            <button className={style.button} onClick={() => navigate(`/camps/${item.id}`)} >LÆS MERE</button>
            <button className={style.button} onClick={() => navigate(`/camps/${item.id}`)}>KØB</button>
            </div>
            
          </article>
        ))}
      </section>
    );
  };
  