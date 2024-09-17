import axios from "axios";
const fetchPopularTracks = async () => {
    try {
        const response = await axios.get("https://api.deezer.com/chart/0/tracks");
        return
         response.data.data; //tem a lista de musicas
    } catch (error) {
        console.error("Erro ao buscar musicas populares:" , error);
    
    }
};