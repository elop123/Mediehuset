import React, { useState } from 'react'
import {useGet} from '../hooks/useGet'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import { Title } from '../components/Title/Title'
import { EventCard } from '../components/EventCard/EventCard'
import { Scenes } from '../components/Scenes/Scenes'

export const LineUp = () => {
    const { data, error, isLoading } = useGet(
        "https://api.mediehuset.net/mediesuset/stages"
      );

   if(isLoading) return <p>Loading stages...</p> 
   if(error) return <p>Error loading stages</p>
   
  return (
    <>
    <HeaderImage imageFilename="crowd3-foto-colourbox.jpg" />
    <Title title="LINE UP" />
    <Scenes />
    <EventCard />
    </>
  )
}
