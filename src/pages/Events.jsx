import React, { useState } from 'react'
import { Title } from '../components/Title/Title'
import { Scenes } from '../components/Scenes/Scenes'
import { EventCard } from '../components/EventCard/EventCard'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'




export const Events = () => {
 
  return (
  <>
  <HeaderImage imageFilename="crowd3-foto-colourbox.jpg" />
  <Title title="LINE UP" />
  <Scenes />
  <EventCard 
              />
  
  </>
  )
}
