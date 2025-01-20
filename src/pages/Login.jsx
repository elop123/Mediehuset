import React, { useState } from 'react'
import {useContext} from 'react'
import { Title } from '../components/Title/Title'
import { LoginForm } from '../components/LoginForm/LoginForm'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import { UserContext } from '../context/useContext'



export const Login = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState();
  const[loginMessage, setLoginMessage] = useState();

  const { userData, setUserData } = useContext(UserContext);
  console.log(email,password);
  
  const handleSubmit = async (event) => {
  event.preventDefault();

  //Create body with key value
  const body = new URLSearchParams();
  body.append('username', email);
  body.append('password', password);

  //Create options object with http request methode
  const options = {
        method:"POST",
       
        body:body,
  }

  //Fetch with options, POST to server
  fetch("https://api.mediehuset.net/token", options)
  .then((res)=>res.json())
  .then((data)=>{
    if(data.access_token){
      setUserData(data);
      setLoginMessage('You are logged in')
    }else{
      setLoginMessage('You have written an invalid email or pasword')
    }
  })
  .catch((err)=>setEmail(err));



  }
  return (
    
    <>
    <HeaderImage imageFilename="camp2-foto-colourbox.jpg"/>
    <Title title="LOGIN" />
    <h3 style={{display:'flex', justifyContent:'center'}}>Indtast login oplysninger</h3>
    <LoginForm  email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleSubmit={handleSubmit}/>
           {loginMessage && (
        <p style={{ textAlign: "center", color: loginMessage.includes("logged in") ? "green" : "red" }}>
          {loginMessage}
        </p>
      )}

    </>
  )}

