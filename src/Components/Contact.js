import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import the icons

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: gray;
`
const Container = styled.div`
  height: fit-content;
  width: 25%;
  background-color: #0a1b43;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 14px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: #fff;
`;

const Paragraph = styled.p`
  font-size: 20px;
  color: #fff;
  
`;

const Strong = styled.strong`
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  margin: 10px;
  display: block;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  align-self: flex-start;
  margin-bottom: 10px;
  
  &:hover {
    text-decoration: underline;
  }
`;

const BackLink = styled(Link)`
  align-self: flex-start;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const SocialMediaList = styled.ul`
  list-style: none;
  padding: 10px;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
`;

const SocialMediaItem = styled.li`
  margin-bottom: 10px;
  color: #fff;
  font-size: 24px;
  width: 100px;

`;

const IconWrapper = styled.span`
  margin-right: 10px;
`;

function Contact() {
  return (
    <Main>
      <Container>
        <Title>Contact Us</Title>
        <Paragraph>Feel free to reach out to us with any questions or inquiries!</Paragraph>
        <Paragraph>
          <Strong>Email:</Strong> <Link href="Lukmansaidmodibbo.com">Lukmansaidmodibbo@gmail.com</Link>
        </Paragraph>
        <Paragraph>
          <Strong>Address:</Strong> 
          <Link href="https://maps.google.com/?q=Your+Business+Address">No: 15 Lugbe street karu Nasarawa State</Link>
        </Paragraph>
        <div>
          <Paragraph>Please Follow Me </Paragraph>
          <SocialMediaList>
            <SocialMediaItem>
              <IconWrapper><FaFacebookSquare /></IconWrapper>
              <Link href="https://web.facebook.com/said.lukman.583/"></Link>
            </SocialMediaItem>
            <SocialMediaItem>
              <IconWrapper><FaTwitter /></IconWrapper>
              <Link href="https://twitter.com/Lukmanmodibbo"></Link>
            </SocialMediaItem>
            <SocialMediaItem>
              <IconWrapper><FaInstagram /></IconWrapper>
              <Link href="https://www.instagram.com/youraccount"></Link>
            </SocialMediaItem>
          </SocialMediaList>
        </div>
        <Footer />
      </Container>
    </Main>
  );
}

export default Contact;
