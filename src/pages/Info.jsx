import React from "react";
import { HeaderImage } from "../components/HeaderImage/HeaderImage";
import { Title } from "../components/Title/Title"; 
import { InfoSection } from "../components/InfoSection/InfoSection";
 


export const Info = () => {
  return (
    <>
      <HeaderImage imageFilename="crowd3-foto-colourbox.jpg" />
      <Title title="PRAKTISK INFO" />
      <InfoSection />
      
    </>
  );
};
