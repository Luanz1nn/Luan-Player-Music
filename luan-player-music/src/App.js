import "./App.css";
import iconLogo from './assets/musica (4).png';
import Image from "./assets/Luan.jpg";
import Playlist from "./components/playlist";
import musics from "./musics";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [songs, setSong] = useState(musics);
  const [currentMusic, setcurretMusic] = useState({id: null, title: "", artist: "", description: "", url: "", cover:"", testBtn: true});


  function handleMusic(music) {
    setcurretMusic(music, {testBtn:false});
  }

  return (
    <div className="container">
      <header>
        <div className="logo">
        <span>Luan</span>
        <img src={iconLogo} alt="logo"/>
        <span>Player</span>
        </div>
        <div className="user">
          <img src={Image} alt="some value" />
          <div className="welcome">
            <h1>Bem vindo, Luan.</h1>
          </div>
        </div>
      </header>

      <main>
        <h1>The best play list</h1>
        <div className="playlist-container">

          {songs.map((music) => {
            return (
              <button key={music.id} onClick={() => handleMusic(music)}>
                <Playlist                
                cover={music.cover}
                title={music.title}
                description={music.description}
              />
              </button>              
            );
        })}
        </div>
      </main>
      <div>
        <Footer
        key={currentMusic.artist}
        music={currentMusic.url}
        title={currentMusic.title}
        artist={currentMusic.artist}
        testBtn={currentMusic.testBtn}
        songs={songs}
        songsIndex={songs.findIndex(x => x.title === currentMusic.title)}
        songsLength={songs.length}
        setcurretMusic={setcurretMusic}
        />
      </div>
    </div>
  );
}

export default App;
