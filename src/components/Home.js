import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import Card from './Card'

const Home = () => {
    
  return (
    <Container>
        <Navbar/>
        <Banner>
            <img src="./banner.jpg" alt="" />
            <img src="./mobile_banner.jpg" alt="" />
        </Banner>
        <Main>
            <Card id={1} image={"https://m.media-amazon.com/images/I/41WCgGbvwhL._SX300_SY300_QL70_FMwebp_.jpg"} price={2500} rating={3} title={"Fire Bolt"}/>
            <Card id={2} image={"https://m.media-amazon.com/images/I/613SAOPmLeL._SL1500_.jpg"} price={40000} rating={4} title={"One Plus Nord CE 2 Lite 6GB RAM 128GB "}/>
            <Card id={3} image={"https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"} price={84490} rating={4.5} title={"Apple 2020 MacBook Air Laptop M1 chip"}/>
            <Card id={4} image={"https://m.media-amazon.com/images/I/51wPWj--fAL._SX679_.jpg"} price={39990} rating={4} title={"Sony PS5 Digital Standalone"}/>
            <Card id={5} image={"https://m.media-amazon.com/images/I/61EXU8BuGZL._AC_UY327_FMwebp_QL65_.jpg"} price={3499} rating={4.5} title={"Echo Dot (3rd Gen) - Smart speaker with Alexa (Black)"}/>
            <Card id={6} image={"https://m.media-amazon.com/images/I/612aeStmuLL._SX522_.jpg"} price={25000} rating={3.5} title={"JBL Tour One M2, Adaptive ANC Bluetooth Over-Ear Headphones"}/>
            <Card id={7} image={"https://m.media-amazon.com/images/I/816YiPaiKNL._SX522_.jpg"} price={1499} rating={4} title={"ZEBRONICS Sound Feast 50, 14 W Portable Speaker"}/>
            <Card id={8} image={"https://m.media-amazon.com/images/I/311zLNZIxPL._AC_SR400,600_.jpg"} price={14499} rating={4} title={"Canon PIXMA G3000 Wi-Fi Mono/Colour,"}/>
       </Main>
    </Container>
  )
}

const Container=styled.div`
  width:100%;
  max-width: 1400px;
  background-color: rgb(234,237,237);
  margin: auto;
  height: fit-content;
`;
const Banner=styled.div`
width: 100%;
img{
    width: 100%;
    -webkit-mask-image: linear-gradient(to bottom,
    rgba(0,0,0,2),rgba(0,0,0,0.95),rgba(0,0,0,0.85),rgba(0,0,0,0.75),rgba(0,0,0,0.55),rgba(0,0,0,0) 
    );
    &:nth-child(2)
  {
    display: none;
  }
@media only screen and (max-width: 767px) {
&:nth-child(1)
{
    display: none;

}
&:nth-child(2)
{
    display: block;
    -webkit-mask-image: none;
}
}
}
`;

const Main=styled.div`
display: grid;
justify-content:center;
place-items:center;
width: 100%;

grid-auto-rows:450px;
grid-template-columns: repeat(4,280px);
grid-gap: 20px;

/*Mobile*/
@media only screen and (max-width:767px) {
    grid-template-columns: repeat(2,40%);
    grid-gap: 0px;
}

/*Tablet*/
@media only screen and (min-width:767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3,30%);
    grid-gap: 0px;
}


/*Mobile*/
@media only screen and (min-width:767px) {
    margin-top: -130px;
    padding: 10px 0px;
}
`;
export default Home
