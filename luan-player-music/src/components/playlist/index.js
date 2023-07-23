import "./style.css";

function Playlist({ title, description, cover }) {
  return (
    <div className="playlist">

        <img src={cover} alt="Music"/>
        <h2>{title}</h2>
        <p>{description}</p>

    </div>
  );
}

export default Playlist;
