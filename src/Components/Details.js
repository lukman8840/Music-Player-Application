import React from 'react';
import styled from 'styled-components';

const DetailsContainer = styled.div`
    max-width: 100%;
`;
const ImageContent = styled.div`
    overflow: hidden;
    justify-content: center;
    align-items: center;
    display: flex;

  .img{
    /* width: 90%; */
    max-height: 30vh;
    border-radius: 100%; 
  } 
`;

const SongTitle = styled.h3`
    color: #fff;
    font-size: 24px;
    margin-top: 10px;
`; 

const SongArtist = styled.h3`
  color: #fff;
  margin: 10px;
  font-size: 24px;
`;

function Details(props) {
  return (
    <DetailsContainer>
      <ImageContent>
        <img src={props.song.img_src} alt="" className='img' />
      </ImageContent>
      <SongTitle>{props.song.title}</SongTitle> 
      <SongArtist>{props.song.artist}</SongArtist>
    </DetailsContainer>
  );
}

export default Details;
