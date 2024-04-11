import React from 'react';
import styled from 'styled-components';
import logo from '../Components/music-5.png';
import { Link } from 'react-router-dom';


const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: gray;
`;

const Container = styled.div`
background-color: #0a1b43;
height: 80vh;
justify-content: center;
flex-direction: column;
margin-top: 60px;
border-radius: 30px;
padding: 28px;
text-align: center;
flex-direction: column;


@media (max-width: 768px){
    width: 80%;

}
`;

const Heading = styled.h1`
margin-top: 10px;
color: #fff;
text-transform: uppercase;
font-size: 1.5rem; 
margin-bottom: 15px;
padding: 20px;
@media (max-width: 768px){
  font-size: 18px;
}
`;

const Paragraph = styled.p`
color: #fff; 
margin: 12px;
text-transform: uppercase;

@media (max-width: 768px){
  font-size: 0.9rem;
}
`;

const IMAGE = styled.img`
padding: 40px;
height: 50vh; 

`;

const START = styled(Link)`
  display: flex;
  justify-content: center;
  background: linear-gradient(#4e72f0);
  cursor: pointer;
  border: 0.5px solid #fff;
  font-size: 14px;
  padding: 14px;
  color: #fff;
  text-decoration: none;
  border-radius: 50px;
  width: 50%;
  transition: background-color 0.3s ease;
  margin-left: 20%;


  &:hover {
    color: black;
    cursor: pointer;
    background-color: #fff; 
    /* width: 50%; */
    /* justify-content: center; */
  }

  @media (max-width: 768px){
    padding: 20px;
    font-size: 16px;
    cursor: pointer;
  }
`;


const Card = () => {
return (
    <Main>
    <Container>
      <Heading>WELCOME</Heading>
      <Paragraph>make your life more live</Paragraph>
      <START to="/MusicManager">Get Started</START>
      <IMAGE src={logo} alt="Welcome" />
    </Container>
    </Main>
);
}

export default Card;
