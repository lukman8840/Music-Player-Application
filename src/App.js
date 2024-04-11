import React from 'react';
import './App.css';
import Card from './Components/Card';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Link from react-router-dom
import { useSongData } from './Components/SongData';
import Player from './Components/Player';
import MusicManager from './Components/MusicManager';
import Contact from './Components/Contact';
import Message from './Components/Message'; 
function App() {
  const { songs, currentSongIndex, setCurrentSongIndex, nextSongIndex } = useSongData();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Card />} />
          <Route path='/Card' element={<Card />} />
          <Route path="/MusicManager" element={<MusicManager />} />
          <Route path='/Card' element={<Card />} />
          <Route
            path="/player"
            element={
              <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
              />
            }
          />
            <Route path="/Message" element={<Message />} />
            <Route path='/Contact' element={<Contact />} />
            
          </Routes>
      </Router>
    </div>
  );
}
export default App