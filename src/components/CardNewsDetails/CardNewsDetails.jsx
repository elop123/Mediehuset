import React, { useState, useEffect } from 'react'; 
import style from './CardNewsDetails.module.scss';
import { useParams } from 'react-router-dom';

export const CardNewsDetails = () => {
  const [newsDetails, setNewsDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const url = `https://api.mediehuset.net/mediesuset/news/${id}`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch the news details');
        }
        return res.json();
      })
      .then((data) => {
        setNewsDetails(data.item); 
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) {
    return <p>Loading news details...</p>;
  }

  if (error) {
    return <p className={style.error}>{error}</p>;
  }

  return (
    <div>
      {newsDetails && (
        <article className={style.newsDetails}>
          <h2 className={style.title}>{newsDetails.title}</h2>
          <h3 className={style.author}>{newsDetails.author}</h3>
          <p className={style.date}>{newsDetails.datetime.slice(0,10)}</p>
          <p className={style.content}>{newsDetails.content}</p>
          <img className={style.newsImg} src={newsDetails.image} alt={newsDetails.title}/>
          <p className={style.teaser}>{newsDetails.teaser}</p>
        </article>
      )}
    </div>
  );
};
