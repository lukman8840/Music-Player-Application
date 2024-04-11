import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import { FaPlay } from 'react-icons/fa';
import { useSongData } from './SongData';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
  min-height: 100vh;
`;

const Main = styled.div`
  background-color: #0a1b43;
  padding: 20px;
  width: 22%;
  border-radius: 20px;
  height: fit-content;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
`;

const Paragraph = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const SongList = styled.ol`
  list-style: none;
  padding: 0px;
  margin-top: 30px;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  align-items: flex-start;
`;

const SongListItem = styled.li`
  margin-bottom: 25px;
  font-size: 18px;
  gap: 20px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center; /* Center icon vertically */
`;

const PlayIcon = styled(FaPlay)`
  margin-right: 10px;
`;

const StyledFooter = styled(Footer)`
  margin-top: 20px; 
`;

function MusicManager() {
  const { songs } = useSongData();
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredSongs = songs.filter((song) =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Main>
        <InputContainer>
          <Input
            type='text'
            placeholder='Search Song'
            value={searchQuery}
            onChange={handleInputChange}
          />
        </InputContainer>
        <Paragraph>List of Music</Paragraph>
        <SongList>
          {filteredSongs.map((song, index) => (
            <Link key={index} to={`/play/${index}`} style={{ textDecoration: 'none' }}>
              <SongListItem key={index}>
                {/* <PlayIcon />  */}
                {song.title}
              </SongListItem>
            </Link>
          ))}
        </SongList>
        <StyledFooter />
      </Main>
    </Container>
  );
}

export default MusicManager;
