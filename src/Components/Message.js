import React, { useState } from 'react';
import styled from 'styled-components'; 
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Footer from './Footer';

//styled Components

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  height: 100vh;
`;

const Container = styled.form` 
  background-color: #0a1b43;
  height: fit-content;
  width: 300px;
  padding: 20px;
  border-radius: 20px;
`;

const Header = styled.h2`
  font-size: 22px;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;

  &::placeholder{
    font-size: 18px;
    color: black;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;

  &::placeholder{
    font-size: 18px;
    color: black;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 100px;

  &:hover{
    color: white;
    background-color:black;
  }
`;

const Icon = styled.div`
    background-color: #fff;
    width: 20px;
    margin: 0px;
    justify-content:center;
    padding: 5px;
    border-radius: 50px;
    cursor: pointer;
`;



function MessageForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Form submitted:', { fullName, email, message });
       
        setFullName('');
        setEmail('');
        setMessage('');
    };

    return (
        <Main>
            <Container onSubmit={handleSubmit}>  
                <Header>Leave a Message For Me</Header>
                <Input 
                    type='text'
                    placeholder='Full Name'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                 />
                <Input
                    type='email'
                    placeholder='Enter Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
                <TextArea 
                    placeholder='Write Your Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    required
                />
                <Button type='submit'>Send Message</Button> {/* Added type='submit' */}
           <Footer />
            </Container>
        </Main>
    );
}

export default MessageForm;
