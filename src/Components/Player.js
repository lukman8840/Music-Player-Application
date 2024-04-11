import React, { useEffect, useRef, useState } from 'react';
import Details from './Details';
import styled from 'styled-components';
import Controls from './Controls';
import { IoIosArrowBack } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Footer from './Footer';

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: gray;
    height: 100vh;
    align-items: center;
    margin-top: 10px;
`;

const PlayerContainer = styled.div`
    background: linear-gradient(to bottom, #141633, #2b2e4a);
    display: flex;
    flex-direction: column; 
    margin-top: 0px;
    border-radius: 30px;
    height: 93vh;
    padding: 15px;

    @media (max-width: 768px) {
        width: 90%;
        height: 70vh;
        padding: 20px;
    }
`;

const H4 = styled.h4`
    color: #fff;
    font-size: 18px;
    margin-top: 0px;
    text-transform: uppercase;
`;

const StyledAudio = styled.audio`
    justify-content: center;
    margin: 0 auto;
    border-radius: 20px;
    color: #333;
    display: block;
    background: linear-gradient(to bottom, #141639, #2b2e4a);
`;

const P = styled.p`
    font-size: 14px;
    color: #fff;
    text-align: center;
`;

const Span = styled.span`
    color: blue;
    font-size: 20px;
`;

const PlayerIconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0px;
    cursor: pointer;
`;

const IoIosArrowBackIcon = styled(IoIosArrowBack)`
    color: #fff;
    font-size: 20px;
    margin: 0px;
    cursor: pointer;
`;

const HiOutlineDotsVerticalIcon = styled(HiOutlineDotsVertical)`
    color: #fff;
    font-size: 20px;
    margin: 0px;
    cursor: pointer;
`;

const DownArrow = styled.div`
        justify-content: center;
        align-items: center;
        text-align:center;
        color: #fff;
    `;

function Player(props) {
    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isPlaying) {
            audioElement.current.play();
        } else {
            audioElement.current.pause();
        }
    }, [isPlaying]);

    // Function to handle changing the current song
    const changeSong = (newIndex) => {
        props.setCurrentSongIndex(newIndex);
    };

    const skipSong = (forwards = true) => {
        const newIndex = (forwards ? props.currentSongIndex + 1 : props.currentSongIndex - 1) % props.songs.length;
        props.setCurrentSongIndex(newIndex < 0 ? props.songs.length - 1 : newIndex);
    };

    return (
        
        <MainContainer>
            <PlayerContainer>
                <PlayerIconsContainer>
                    <Link to="/Card">
                        <IoIosArrowBackIcon />
                    </Link>
                    <HiOutlineDotsVerticalIcon />
                </PlayerIconsContainer>
                <H4>Now Playing</H4>
                <Details 
                    song={props.songs[props.currentSongIndex]}
                />
                <Controls
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    skipSong={skipSong} 
                />
                <StyledAudio
                    className='player_audio'
                    src={props.songs[props.currentSongIndex].src}
                    ref={audioElement}
                    controls
                    onEnded={() => changeSong(props.currentSongIndex + 1)} 
                />
                <P>Next Up: <Span>
                    {props.songs[props.nextSongIndex].title} by 
                    {props.songs[props.nextSongIndex].artist}
                    </Span>
                </P>
                <Footer />
            </PlayerContainer>
        </MainContainer>
    );
}

export default Player;
