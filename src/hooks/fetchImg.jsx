import React, { useEffect, useState } from 'react'

export const fetchImg = () => {
    const [image, setImage] = useState();
    const [error, setError] = useState();

    const url=`https://api.mediehuset.net/mediesuset/images`;

    useEffect(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch the image');
          }
          return res.json();
        })
        .then((data) => {
          const HeaderImg = data.items.find(
            (item) => item.filename === 'crowd3-foto-colourbox.jpg'
          );
          if (HeaderImg) {
            setImage(HeaderImg);
          } else {
            setError('Image not found');
          }
        })
        .catch((err) => setError(err.message));
    }, []);

  return (
    <>
    {image ?(
        <img src={image.image}
             alt={image.filename} />
    ):(!error && <p>Loading image...</p>)}
    </>
  )
}
