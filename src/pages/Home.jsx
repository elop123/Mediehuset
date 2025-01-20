import React from 'react'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import { CardNews } from '../components/CardNews/CardNews'
import { Title } from '../components/Title/Title'


export const Home = () => {
  return (
    <>
    <HeaderImage imageFilename="crowd3-foto-colourbox.jpg" />
    <Title title="NYHEDER" />
    <CardNews />
    </>
  )
}
