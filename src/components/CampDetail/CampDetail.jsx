import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './CampDetail.module.scss'

export const CampDetail = () => {
    const [campDetails, setCampDetails] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
  
    const url = `https://api.mediehuset.net/mediesuset/camps/${id}`;
  
    useEffect(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch the camp details');
          }
          return res.json();
        })
        .then((data) => {
          setCampDetails(data.item); 
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, [url]);
  
    if (loading) {
      return <p>Loading camp details...</p>;
    }
  
    if (error) {
      return <p className={style.error}>{error}</p>;
    }
  
    return (
      <div>
        {campDetails && (
          <article className={style.campDetails}>
            <h2 className={`${style.name} ${campDetails.name === "Camp Colorit"? style.colorit
                           : campDetails.name === "Camp Kultunaut" ? style.kultunaut
                           : style.deluxe}`}>{campDetails.name}</h2>
            <p className={style.description}>{campDetails.description}</p>
            <p className={style.numPeple}>{campDetails.num_people} PLADSER</p>
            <img className={style.campImg} src={campDetails.image} alt={campDetails.name}/>
          </article>
        )}
      </div>
    );
  };
  