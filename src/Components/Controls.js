import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackward, faPause, faPlay, faForward } from '@fortawesome/free-solid-svg-icons'; // Added faPlay here

const ControlContainer = styled.div`
  display: flex;
  justify-content:space-around;
  margin: 10px;
`;

const Button = styled.button`
  /* Add your styles for the button here */
  font-size: 20px;
  cursor: pointer;
  border: none;
  padding: 20px 20px;
  border-radius: 50%; /* Make it round */
  background-color: transparent;
  color: #fff; 
  margin: 0 auto;

  &:hover {
    cursor: pointer;
    color: white; /* Change text color on hover */
  }
`;

const ButtonPlay = styled(Button)`
  /* Add your styles for the play button here */
  width: 60px;
  height: 40px; 
`;



function Controls(props) {
  return (
    <ControlContainer>
      <Button onClick={() => props.skipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </Button>

      <ButtonPlay onClick={() => props.setIsPlaying(!props.isPlaying)}>
  <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
    </ButtonPlay>


      <ButtonPlay>
        <FontAwesomeIcon icon={faForward} onClick={() => props.skipSong()} />
      </ButtonPlay>
    </ControlContainer>
  );
}

export default Controls;
