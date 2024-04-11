// MainSection.js
import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CiHeart } from 'react-icons/ci';
// import image from './Assets/music-2.webp';
import Footer from './Footer';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
  
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 20px;
  }
`;

const Recommendation = styled.h2`
  color: #fff;
  margin-top: 10px;
  font-size: 18px;
  display: block;
  text-transform: uppercase;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  width: 100%;

`;

const Paragraph = styled.p`
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 10px;
  
`;

const Icon = styled(CiHeart)`
  color: red;
  font-size: 24px;
  cursor: pointer;

  @media (max-width: 768px) {
    cursor: pointer;
  }
`;

const IMAGE = styled.img`
  width: 60px;
  border-radius: 10px;
  cursor: pointer;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MainSection = () => {
  return (
    <>
    <Container>
      <Recommendation>List of Musics</Recommendation>
    {/* <Content>
      {constant.map((music) => (
        <Link to="/NowPlaying" key={music.id}>
          <MusicRecommendation image={music.image} name={music.name}/>
        </Link>
      ))}
      </Content> */}
    </Container>
    <Footer />
    </>
  );
}

const MusicRecommendation = ({ image, name }) => {
  return (
    <ContentItem>
      <div style={{display:'flex', alignItems:'center', gap:8}}>
      <IMAGE src={image} alt={name} />
        <Paragraph>{name}</Paragraph>
      </div>
      <div>
      <Icon />
      </div>
    </ContentItem>
  );
}

export default MainSection;
