import React from 'react';
import style from './Scenes.module.scss';
import { useGet } from '../../hooks/useGet';

export const Scenes = () => {
  const { data, error, isLoading } = useGet(
    'https://api.mediehuset.net/mediesuset/stages'
  );

  if (isLoading) return <p>Loading stages...</p>;
  if (error) return <p>Error loading stages</p>;

  return (
  <nav className={style.stagesNav}>
  <ul className={style.stage}>
    <li>A-Å</li> 
  </ul>
  {data &&
    data.items.map((stage) => (
      <ul key={stage.id} className={style.stage}>
        <li>{stage.name.toUpperCase()}</li>
      </ul>
    ))}
</nav>

  );
};
