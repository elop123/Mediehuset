import React from 'react'
import { Title } from '../components/Title/Title'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import { DayBar } from '../components/DayBar/DayBar'
import { ProgramCard } from '../components/ProgramCard/ProgramCard'


export const Program = () => {
  return (
    <>
    <HeaderImage  imageFilename="crowd3-foto-colourbox.jpg"/>
   <Title title="PROGRAM"/>
   <DayBar/>
   <ProgramCard />
    </>
  )
}
