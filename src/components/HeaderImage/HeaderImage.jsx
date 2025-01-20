import React, { useState, useEffect } from 'react'
import style from './HeaderImage.module.scss'

export const HeaderImage = ({ imageFilename }) => {
   const [image, setImage] = useState();
   const [error, setError] = useState();
  
      const url=`https://api.mediehuset.net/mediesuset/images`;
  
      useEffect(() => {
        if(imageFilename){
        fetch(url)
          .then((res) => {
            if (!res.ok) {
              throw new Error('Failed to fetch the image');
            }
            return res.json();
          })
          .then((data) => {
            const HeaderImg = data.items.find(
              (item) => item.filename === imageFilename
              //'crowd3-foto-colourbox.jpg'
            );
            if (HeaderImg) {
              setImage(HeaderImg);
            } else {
              setError('Image is not found');
            }
          })
          .catch((err) => setError(err.message));
        }
      }, [imageFilename]);
  
    return (
      <>
      {image ?(
          <img  className={style.headerImg} 
                src={image.image}
                alt={image.filename} />
      ):(!error && <p>Loading image...</p>)}
      </>
    )
  }
 
