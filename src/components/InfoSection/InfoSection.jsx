import React from 'react'
import map from '../../assets/images/mediesuset-map.jpg'
import style from './InfoSection.module.scss'

export const InfoSection = () => {
  return (
   <>
   <section className={style.mapSection}>
        <h2 className={style.title}>Kort over pladsen</h2>
        <img
          src={map}
          alt="Kort over festivalpladsen"
          className={style.mapImage}
        />
      </section>

      <section className={style.directionSection}>
        <h2 children={style.titleDirection}>Find vej</h2>
        <p>Her kan du finde festivalens adresse på et Google Map kort.</p>
        <iframe
          title="Tech College Aalborg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.600623518844!2d9.924536316064295!3d57.0488205809266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932b040d6ae69%3A0x5f1cf0eb85e90bc7!2sTech%20College%20Aalborg!5e0!3m2!1sen!2sdk!4v1614301573949!5m2!1sen!2sdk"
          width="80%"
          height="450px"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
   </>
  )
}
