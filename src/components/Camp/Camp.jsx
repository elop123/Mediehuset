import React from 'react';
import style from './Camp.module.scss';
import { CampCard } from '../CampCard/CampCard';

export const Camp = () => {
  return (
    <section className={style.campOverview}>
     
      <p className={style.text}>
        Festivalen tilbyder tre unikke campingområder. Hver camp tilbyder særlige faciliteter og
        muligheder, der passer til forskellige behov. Klik på et camp-område for at få flere
        detaljer.
      </p>
     <CampCard/>
          
    </section>
  );
};
