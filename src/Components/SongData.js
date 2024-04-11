import { useState, useEffect } from 'react';

export const useSongData = () => {
  const [songs, setSongs] = useState([
    {
      title: 'Legend',
      artist: 'John Legend',
      img_src: '', // Initialize with an empty string
      src: './Songs/john.mp3'
    },
    {
      title: 'Sanam teri kasam',
      artist: 'John Legend',
      img_src: '', // Initialize with an empty string
      src: './Songs/sanam.mp3'
    },
    {
      title: 'Namej',
      artist: 'Baby Na gode',
      img_src: '', // Initialize with an empty string
      src: './Songs/Namej.mp3'
    },
    {
      title: 'Waii ya zanyi',
      artist: 'Namenj',
      img_src: '', // Initialize with an empty string
      src: './Songs/Namenj.mp3'
    },
    {
      title: 'emeli',
      artist: 'emeli(mpguri)',
      img_src: '', // Initialize with an empty string
      src: './Songs/emeli_mpguri.mp3'
    },
    {
      title: 'Hasley Without Me',
      artist: 'Hasley',
      img_src: '', // Initialize with an empty string
      src: './Songs/Halsey_-_Without_Me_Lyrics_a3jblj.mp3'
    },
    {
      title: 'Legend',
      artist: 'John Legend',
      img_src: '', // Initialize with an empty string
      src: './Songs/john.mp3'
    },
    {
      title: 'Soyayya Dadi',
      artist: 'Namenj',
      img_src: '', // Initialize with an empty string
      src: './Songs/WhatsApp Audio 2024-04-02 at 3.16.26 PM.mp3'
    },
   
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    // Function to generate a random image link
    const generateRandomImage = () => {
      return `https://source.unsplash.com/random/200x200?sig=${Math.floor(Math.random() * 1000)}`;
    };

    // Update the img_src for the current song
    setSongs(prevSongs => {
      return prevSongs.map((song, index) => {
        if (index === currentSongIndex) {
          return {
            ...song,
            img_src: generateRandomImage() // Generate a random image link for the current song
          };
        } else {
          return song;
        }
      });
    });

    // Update next song index
    setNextSongIndex(prevNextIndex => {
      return (prevNextIndex + 1) % songs.length;
    });
  }, [currentSongIndex]);

  return { songs, currentSongIndex, setCurrentSongIndex, nextSongIndex };
};
