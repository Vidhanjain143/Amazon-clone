import React, { useState } from 'react'
import styled from 'styled-components';
import { auth,db,provider } from '../firebase';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate=useNavigate();
  const handleClick=()=>{
    signInWithPopup(auth,provider).then(
      navigate('/login'))
  }
  const handleSignup=async (event)=>{
    event.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      const user = auth.currentUser;
      console.log(user.uid);
      await user.updateEmail(email);
      await user.updatePassword(password);
      const userData = {
        email,
        password
      };
      await db.ref('users/' + user.uid).set(userData);
    }catch(err)
    {
      alert(err.message);
    }
  }
  return (
   <Container>
    <Logo>
      <img src="./amazon_logo.png" alt=""/>
    </Logo>
    <FormContainer>
          <h3>Sign Up</h3>
          <InputContainer>
          <p>Name</p>
          <input type="text" placeholder='Vidhan Jain' onChange={(e)=>setName(e.target.value)} value={name}/>
          </InputContainer>
          <InputContainer>
          <p>Email</p>
          <input type="email" placeholder='example@example.com' onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </InputContainer>
          <InputContainer>
          <p>Password</p>
          <input type="password" placeholder='*********' onChange={(e)=>setPassword(e.target.value)} value={password}/>
          </InputContainer>
          <SignupButton onClick={handleSignup}>Create Account</SignupButton>
      </FormContainer>
      <GoogleButton onClick={handleClick}>
      <GoogleIcon />
      Sign in with Google
    </GoogleButton>
      <LoginButton>Back To Login</LoginButton>
      
   </Container>
  )
}

const Container=styled.div`
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
padding:5px;

p{
  font-size: 14px;
  font-weight: 600;
  margin-top: 0px;
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
const SignupButton=styled.button`
 width: 100%;
 height: 35px;
 font-size: 16px;
 font-weight: 400;
 margin: 20px;
 background-color: #6DA9E4;
 border-radius: 5px;
 border: none;

 &:hover{
  background-color: #7C96AB;
  border: 1px solid gray;

 }
`;
const LoginButton=styled.button`
width: 55%;
height: 35px;
background-color: #f3b414;
border: none;
outline: none;
border-radius: 10px;
margin-top: 20px;
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
  margin-top: 20px;
`;

const GoogleIcon = styled(FaGoogle)`
  font-size: 20px;
  margin-right: 10px;
`;

export default Signup
