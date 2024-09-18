import { useState, useEffect } from "react";
import axios from "axios";

export function Api() {
  const clientID = "e3cbf3f933284897af6fb13a160dc621";
  const clientSecret = "8141fa29f1cf4e84a7404ae493c10269";

  const [dado, setDado] = useState('');
  const [token, setToken] = useState('');

  const handleChangeSearchValue = (e) => {
    setDado(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');

        const response = await axios.post(
          "https://accounts.spotify.com/api/token",
          params.toString(),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
              username: clientID,
              password: clientSecret,
            },
          }
        );
        setToken(response.data.access_token);
        console.log('Token:', response.data.access_token);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchToken();

    const intervalId = setInterval(fetchToken, 3600000)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeSearchValue} type="text" value={dado} />
        <button type="submit">Enviar</button>
      </form>
      {token && <p>Token: {token}</p>}
    </div>
  );
}
