import "./style.css";
import { useState } from "react";
import { useRef } from "react";


export default function Footer({music, title, artist, testBtn, songsIndex, setcurretMusic, songsLength, songs}) {
  const audioRef = useRef();
  const [status, setStatus] = useState(testBtn);
  const [progress, setprogress] = useState(0);
 
  const [musicLength, setmusicLength] = useState("00");
  const [durationMin, setdurationMin] = useState("00");
  const [durationSec, setdurationSec] = useState("00");
  const [min, setmin] = useState("00");
  const [sec, setsec] = useState("00");


  function handleStop() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setStatus(true);
  }

  function handlePrev() {
    if (songsIndex === 0) {
      setcurretMusic(songs[songsLength -1])
    }else {
      setcurretMusic(songs[songsIndex -1])
    }
  }

  function handlePause() {
    audioRef.current.pause();
    setStatus(true);
  }

  function handlePlay() {
    audioRef.current.play();
    setStatus(false);
  }

  function handleNext() {
    if (songsIndex === songsLength -1) {
      setcurretMusic(songs[0])
    }else {
      setcurretMusic(songs[songsIndex + 1])
    }
  }

  const onplaying = () => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime

    const currentSec = () =>{
      if (Math.floor(currentTime % 60) < 10) {
        return `0${Math.floor(currentTime % 60)}`
      }else{
      return Math.floor(currentTime % 60)
      }      
    }
    const currentMIn = () =>{
      if (Math.floor(currentTime % 60) < 10) {
        return `0${Math.floor(currentTime / 60)}`
      }else{
      return Math.floor(currentTime / 60)
      }  
    }

  const durationSecFormatted = ()=>{
        if (Math.floor(musicLength % 60) < 10) {
          return `0${Math.floor(musicLength % 60)}`
        }else{
        return Math.floor(musicLength % 60)
        }      
      };
      const durationMinFormatted = ()=>{
        if (Math.floor(musicLength / 60) < 10) {
          return `0${Math.floor(musicLength / 60)}`
        }else{
        return Math.floor(musicLength / 60)
        }      
      };
    
    setdurationMin(durationMinFormatted)
    setdurationSec(durationSecFormatted)
    setmusicLength(duration)
    setmin(currentMIn);
    setsec(currentSec);
    setprogress(currentTime / duration * 100);
  }

  return (
    <div className="footer-container">
      <audio src={music} ref={audioRef} autoPlay={true} onTimeUpdate={onplaying}/>
      <div className="music-information">
        <h1>{title}</h1>
        <h2>{artist}</h2>
      </div>
      <div className="player">
        <div className="player-icon">
          <button onClick={handleStop}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 3.75C35.166 3.75 44.25 12.834 44.25 24C44.25 35.166 35.166 44.25 24 44.25C12.834 44.25 3.75 35.166 3.75 24C3.75 12.834 12.834 3.75 24 3.75ZM24 1.5C11.5748 1.5 1.5 11.574 1.5 24C1.5 36.426 11.5748 46.5 24 46.5C36.4253 46.5 46.5 36.426 46.5 24C46.5 11.574 36.4253 1.5 24 1.5Z"
                fill="#CCC3C3"
              />
              <path
                d="M31.0785 13.1722H16.9222C14.8597 13.1722 13.1722 14.8597 13.1722 16.9222V31.0785C13.1722 33.141 14.8597 34.8285 16.9222 34.8285H31.0785C33.141 34.8285 34.8285 33.141 34.8285 31.0785V16.9222C34.8285 14.8597 33.141 13.1722 31.0785 13.1722ZM32.5785 30.3285C32.5785 31.566 31.566 32.5785 30.3285 32.5785H17.6722C16.4347 32.5785 15.4222 31.566 15.4222 30.3285V17.6722C15.4222 16.4347 16.4347 15.4222 17.6722 15.4222H30.3285C31.566 15.4222 32.5785 16.4347 32.5785 17.6722V30.3285Z"
                fill="#CCC3C3"
              />
            </svg>
          </button>

          <button onClick={handlePrev}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 3.75C35.166 3.75 44.25 12.834 44.25 24C44.25 35.166 35.166 44.25 24 44.25C12.834 44.25 3.75 35.166 3.75 24C3.75 12.834 12.834 3.75 24 3.75ZM24 1.5C11.5748 1.5 1.5 11.574 1.5 24C1.5 36.426 11.5748 46.5 24 46.5C36.4253 46.5 46.5 36.426 46.5 24C46.5 11.574 36.4253 1.5 24 1.5Z"
                fill="#CCC3C3"
              />
              <path
                d="M15.375 16.9222V31.0785C15.375 33.141 17.0625 34.8285 19.125 34.8285C21.1875 34.8285 22.875 33.141 22.875 31.0785V28.1197L28.8593 32.0362C30.9307 33.3907 32.625 32.475 32.625 30V17.3437C32.625 14.8687 30.933 13.9567 28.866 15.3172L22.875 19.26V16.9222C22.875 14.8597 21.1875 13.1722 19.125 13.1722C17.0625 13.1722 15.375 14.8597 15.375 16.9222ZM17.625 16.9222C17.625 16.0972 18.3 15.4222 19.125 15.4222C19.95 15.4222 20.625 16.0972 20.625 16.9222V22.0875C20.625 22.8277 21.189 23.0625 21.8782 22.6087L29.1217 17.8432C29.811 17.3902 30.375 17.694 30.375 18.5182V28.839C30.375 29.664 29.8103 29.9692 29.1195 29.5177L21.8805 24.7792C21.1897 24.3277 20.625 24.5632 20.625 25.3027V31.0785C20.625 31.9035 19.95 32.5785 19.125 32.5785C18.3 32.5785 17.625 31.9035 17.625 31.0785V16.9222Z"
                fill="#CCC3C3"
              />
            </svg>
          </button>

          {status ? (
            <button onClick={handlePlay}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 5C46.888 5 59 17.112 59 32C59 46.888 46.888 59 32 59C17.112 59 5 46.888 5 32C5 17.112 17.112 5 32 5ZM32 2C15.433 2 2 15.432 2 32C2 48.568 15.433 62 32 62C48.567 62 62 48.568 62 32C62 15.432 48.567 2 32 2Z"
                  fill="#CCC3C3"
                />
                <path
                  d="M43.987 28.745L28.013 18.232C25.256 16.418 23 17.635 23 20.935V43.06C23 46.36 25.259 47.581 28.021 45.774L43.98 35.33C46.741 33.521 46.744 30.559 43.987 28.745ZM41.858 33.124L27.673 42.407C26.753 43.01 26 42.603 26 41.503V22.491C26 21.391 26.752 20.986 27.671 21.591L41.861 30.929C42.78 31.533 42.779 32.521 41.858 33.124Z"
                  fill="#CCC3C3"
                />
              </svg>
            </button>
          ) : (
            <button onClick={handlePause}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 5C46.888 5 59 17.112 59 32C59 46.888 46.888 59 32 59C17.112 59 5 46.888 5 32C5 17.112 17.112 5 32 5ZM32 2C15.433 2 2 15.432 2 32C2 48.568 15.433 62 32 62C48.567 62 62 48.568 62 32C62 15.432 48.567 2 32 2Z"
                  fill="#CCC3C3"
                />
                <path
                  d="M39 17.563C36.25 17.563 34 19.813 34 22.563V41.438C34 44.188 36.25 46.438 39 46.438C41.75 46.438 44 44.188 44 41.438V22.563C44 19.813 41.75 17.563 39 17.563ZM41 41.438C41 42.538 40.1 43.438 39 43.438C37.9 43.438 37 42.538 37 41.438V22.563C37 21.463 37.9 20.563 39 20.563C40.1 20.563 41 21.463 41 22.563V41.438ZM25 17.563C22.25 17.563 20 19.813 20 22.563V41.438C20 44.188 22.25 46.438 25 46.438C27.75 46.438 30 44.188 30 41.438V22.563C30 19.813 27.75 17.563 25 17.563ZM27 41.438C27 42.538 26.1 43.438 25 43.438C23.9 43.438 23 42.538 23 41.438V22.563C23 21.463 23.9 20.563 25 20.563C26.1 20.563 27 21.463 27 22.563V41.438Z"
                  fill="#CCC3C3"
                />
              </svg>
            </button>
          )}

          <button onClick={handleNext}>
            <svg
              width="34"
              height="34"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 3.75C35.166 3.75 44.25 12.834 44.25 24C44.25 35.166 35.166 44.25 24 44.25C12.834 44.25 3.75 35.166 3.75 24C3.75 12.834 12.834 3.75 24 3.75ZM24 1.5C11.5748 1.5 1.5 11.574 1.5 24C1.5 36.426 11.5748 46.5 24 46.5C36.4253 46.5 46.5 36.426 46.5 24C46.5 11.574 36.4253 1.5 24 1.5Z"
                fill="#CCC3C3"
              />
              <path
                d="M28.875 13.1722C26.8125 13.1722 25.125 14.8597 25.125 16.9222V19.26L19.134 15.3172C17.067 13.9575 15.375 14.8687 15.375 17.3437V30C15.375 32.475 17.0692 33.3907 19.1407 32.0355L25.125 28.119V31.0777C25.125 33.1402 26.8125 34.8277 28.875 34.8277C30.9375 34.8277 32.625 33.1402 32.625 31.0777V16.9222C32.625 14.8597 30.9375 13.1722 28.875 13.1722ZM30.375 21.2137V31.0785C30.375 31.9035 29.7 32.5785 28.875 32.5785C28.05 32.5785 27.375 31.9035 27.375 31.0785V25.3027C27.375 24.5632 26.8103 24.3277 26.1195 24.7792L18.8805 29.5177C18.1897 29.9692 17.625 29.6632 17.625 28.839V18.5175C17.625 17.6925 18.189 17.3887 18.8782 17.8425L26.1217 22.608C26.811 23.061 27.375 22.827 27.375 22.0867V16.9215C27.375 16.0965 28.05 15.4215 28.875 15.4215C29.7 15.4215 30.375 16.0965 30.375 16.9215V21.2137Z"
                fill="#CCC3C3"
              />
            </svg>
          </button>
        </div>
        <div className="timer">
          <p>{min}:{sec}</p>
          <div className="playtime">
            <div className="interval" style={{width: `${progress + "%"}`}}>
              <button className="progress"></button>
            </div>
          </div>
          <p>{durationMin}:{durationSec}</p>          
        </div>
      </div>
    </div>
  );
}
