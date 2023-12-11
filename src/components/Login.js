import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { auth,provider } from '../firebase';
import { FaGoogle } from 'react-icons/fa';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const handleClick=()=>{
    signInWithPopup(auth,provider).then((data)=>{
      navigate('/');
    })
  }
  const handleLogin=()=>{
    signInWithEmailAndPassword(auth,email,password).then((data)=>{
      setEmail("");
      setPassword("");
      navigate('/');
    })
  }
  return (
    <Container>
      <Logo>
        <img src="./amazon_logo.png" alt="" />
      </Logo>
      <FormContainer>
          <h3>Sign In</h3>
          <InputContainer>
          <p>Email</p>
          <input type="email" placeholder='example@example.com' onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </InputContainer>
          <InputContainer>
          <p>Password</p>
          <input type="password" placeholder='*********' onChange={(e)=>setPassword(e.target.value)} value={password}/>
          </InputContainer>
          <LoginButton onClick={handleLogin}>Login</LoginButton>
          <InfoText>By contiuing, you agree to Amazon's <span> Conditions of Use </span> and <span> Privacy Notice </span>.</InfoText>
      </FormContainer>
      <GoogleButton onClick={handleClick}>
      <GoogleIcon />
      Sign in with Google
    </GoogleButton>
     <SignupButton onClick={()=>{navigate('/signup')}}>
      Create Account in Amazon 
     </SignupButton>
    </Container>
  )
}

const Container= styled.div`
width: 40%;
min-width:450px;
height: fit-content;
padding: 15px;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
`;
const Logo=styled.div`
  width: 120px;
  margin-bottom: 20px;
  img{
    width: 100%;

  }
`;

const FormContainer=styled.div`
 border: 1px solid lightgrey;
 width: 55%;
 height: 400px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 padding: 15px;

 h3{
  font-size: 28px;
  font-weight:400;
  line-height: 33px;
  align-self:flex-start;
  margin-bottom:10px ;
 }
`;

const InputContainer=styled.div`
width: 100%;
padding:10px;

p{
  font-size: 14px;
  font-weight: 600;
}

input{
  width: 95%;
  height: 33px;
  padding-left: 5px;
  border-radius: 5px;
  border: 1px solid lightgrey;
  margin-top: 5px;
  
  &:hover{
    border: 1px solid orange;
  }
}
`;

const LoginButton=styled.button`
width: 70%;
height: 35px;
background-color: #f3b414;
border: none;
outline: none;
border-radius: 10px;
margin-top: 10px;
`;

const InfoText=styled.p`
font-size: 12px;
width: 100%;
word-wrap: normal;
word-break: normal;
margin-top: 20px;


span{
  color: #426bc0;
}
`;

const SignupButton=styled.button`
 width: 55%;
 height: 35px;
 font-size: 12px;
 margin-top: 20px;

 &:hover{
  background-color: #dfdfdf;
  border: 1px solid gray;

 }
`;
const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4285f4;
  color: #ffff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  padding: 10px 15px;
  cursor: pointer;
  width: 55%;
  height: 40px;
  margin-top: 10px;
`;

const GoogleIcon = styled(FaGoogle)`
  font-size: 20px;
  margin-right: 10px;
`;

export default Login
