import React, { useState } from 'react'

export const Modal = ({isModalOpen, setIsModalOpen, selectedArtist}) => {
    if (!isModalOpen || !selectedArtist) return null;
 

  return (
    <div>
      {!isModalOpen ? (
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      ) : (
        <div className="modal">
          <h2>Modal</h2>
          <img src="" alt="Modal Visual" />
          <p>Title</p>
          <p>Text</p>
        </div>
      )}
    </div>
  );
};
