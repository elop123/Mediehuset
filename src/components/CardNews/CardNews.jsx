import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './CardNews.module.scss';

export const CardNews = () => {
  const [news, setNews] = useState([]); 
  const [error, setError] = useState(); 
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate();

  const url = `https://api.mediehuset.net/mediesuset/news`;

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch the news');
        }
        return res.json();
      })
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setNews(data.items);
        } else {
          setError('No news found');
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
    <section className={style.cardNews}>
      {news.slice(0,6).map((item) => (
        <article key={item.id} className={style.newsItem}>
          <img
            className={style.newsImg}
            src={item.image}
            alt={item.title}
          />
          <h2 className={style.title}>{item.title.slice(0,25)}</h2>
          <p className={style.teaser}>{item.teaser.slice(0,90)}...</p>
          <button className={style.button}
                  onClick={() => navigate(`/events/${item.id}`)}>LÆS MERE</button>
        </article>
      ))}
    </section>
  );
};
