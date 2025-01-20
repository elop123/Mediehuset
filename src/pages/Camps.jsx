import React from 'react'
import { Camp } from '../components/Camp/Camp'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import { Title } from '../components/Title/Title'

export const Camps = () => {
  return (
   <>
   <HeaderImage imageFilename="crowd3-foto-colourbox.jpg" />
   <Title title="CAMPINGOMRÅDER"/>
   <Camp />
   </>
  )
}
