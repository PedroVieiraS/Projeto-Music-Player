import { useState, useEffect } from "react";
import axios from "axios";

export function Api() {
  const clientID = "739eb601f95c43918a41909d9d18dcc3";
  const clientSecret = "4bf68fed399b4d1a8565056c664186f9";

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
