import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';
import { UserContext } from '../UserContext';
import { auth } from '../firebase';
const Navbar = () => {
    const {user}=useContext(UserContext);
    const [{basket}] = useStateValue();
    const navigate = useNavigate();
    const handleSignOut=()=>{
        auth.signOut().then(()=>{
          
            navigate('/')
        }).catch((err)=>{
            alert(err.message);
        })
    }
  return (
    <Container>
     <Inner>
        <Logo onClick={()=>{navigate('/')}}>
            <img src="./amazon_logo1.png" alt="" />
        </Logo>
        <SearchBar>
            <input type="text" placeholder='Search...' />
            <SearchIcon>
                <img src="./searchIcon.png" alt="" />
            </SearchIcon>
        </SearchBar>
        <RightContainer>
            <NavButton onClick={()=>{navigate('/login')}}>
                <p>Hello,</p>
                <p>{user ? user.email : 'Guest'}</p>
            </NavButton>
            <NavButton>
                <p>Return</p>
                <p>& Orders</p>
            </NavButton>
            <BasketButton onClick={()=>{navigate("/checkout")}}>
            <img src="./basket-icon.png" alt="" />
            <p>{basket.length}</p>
            </BasketButton>
            <LogoutButton onClick={handleSignOut}>
                Out
            </LogoutButton>
        </RightContainer>
     </Inner>
    <MobileSearch>
        <input type="text" placeholder='Search...' />
            <SearchIcon>
              <img src="./searchIcon.png" alt="" />
            </SearchIcon>
    </MobileSearch>
    </Container>
  )
}
const Container=styled.div`
 width: 100%;
 height: 60px;
 background-color : #131921 ;
 display: flex;
 align-items: center;
 position: relative;

 @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;
}
`;
const Inner=styled.div`
width: 100%;
display: flex;
align-items: center;
@media only screen and (max-width: 767px) {
 justify-content :space-between ;
}
`;
const Logo=styled.div`
margin-left: 20px;
cursor: pointer;
img{
    width:100px;
    margin-top: 10px;
}
`;
const SearchBar=styled.div`
height: 35px;
flex: 1;
margin: 0px 15px;
display: flex;
align-items: center;

input{
    flex:1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder{
        padding-left: 5px;     
    }
    
}
@media only screen and (max-width:767px)
   {
    display:none;
   }
`;
const SearchIcon=styled.div`
background-color: #febd69;
height: 106%;
width: 40px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 0px 5px 5px 0px;
img{
    width: 22px;
}
`;
const RightContainer=styled.div`
display: flex;
align-items: center;
width: fit-content;
justify-content: space-around;
height: 100%;
padding:  5px 15px;

`;

const NavButton=styled.div`
color: #fff;
padding: 5px;
height: 80%;
display: flex;
flex-direction: column;
justify-content: center;
cursor: pointer;
margin-right: 15px;
    
p{
   &:nth-child(1){
    font-size: 12px;
    margin-bottom: 0%;
   }
   &:nth-child(2){
    font-size: 14px;
    font-weight: 600;
    margin-top: 0%;
   }  
}
`;
const BasketButton=styled.div`
display: flex;
align-items: center;
height: 90%;
cursor: pointer;

img{
    width: 30px;
    margin-right: 10px;
}
p{
    color: #fff;
    font-weight: 500;

}
`;
const MobileSearch=styled.div`
  height:35px;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 5px;
  input{
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder{
        padding-left: 10px;
    }
  }
  @media only screen and (min-width: 768px) {
  display: none;
}
`;

const LogoutButton=styled.button`
 border-radius: 3px;
 outline: none;
 border: none;
 margin-left: 2px;
 height: 20px;
 background-color: #febd69;
`;
export default Navbar
