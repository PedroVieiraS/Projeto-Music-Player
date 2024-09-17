import React , {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {
    const [ tracks , setTracks] = useState([]);

    useEffect(() => {
        fetchPopularTracks();
} , []);
const fetchPopularTracks = async () =>{
    const response = await axios.get('https://api.deezer.com/chart/0/tracks');
    setTracks(response.data.data);
    //guarda a musica
};
return (
    <div>
        <h1>Músicas Populares</h1>
        <ul>
            {tracks.map(track =>(
                <li key={track.id}>
                    {track.title}-{track.artist.name}
                    <button onClick={() =>handleAddToPlaylist(track)}>
                        Adicionar à playlist
                    </button>
                    </li>
            ))}
        </ul>
    </div>
)
}