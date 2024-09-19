import { useEffect, useState } from "react";
import {api} from "../../services/api"

export function PegarMusica() {

  const [dado, setdado] = useState('')
  const [datas, setdatas] = useState([])
  // const [loading, setLoading] = useState(false)
  const token =
    "BQAw859FFmXQzShrPqzYO0N-Ofgy058eXGc3cYe-6CQkbyypiageERPFIYkYs_yBInRXEavXxcueVKVuSGw86brAgldQA37I_HxdNKK7ovrqdjKvBdo";

  function handleChangeSearchValue(e){
    setdado(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // setLoading(true)
    const {data}  = await api.get(
      `/v1/search?q=${dado}&type=album`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

    console.log(data)
    console.log(data.albums)

    // const dito = data.albums.items.map((item) => ({
    //   fullName: item.name,
    //   description: item.album_type,
    // }
    // ));

    const dito = data.albums.items.map((item) => item)

    setdatas(dito)
    // setLoading(false)

  }

  useEffect(()=>{
    console.log("data aqui ",datas)
    console.log(datas.length)

    
    // console.log("este sao os albuns", datas.albums.items[0].name)
    
    
  },[datas])

  

  

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChangeSearchValue} type="text" value={dado} />
        <button type="submit">enviar</button>
        
        
        {datas.length > 0 && (
          <ul>{datas.map((data, index)=>(
            <li key={index} style={{ "margin-top": "20px" }}>
              <img src={data.images[0].url} alt="" style={{ "width": "200px" }}/>
              <a href={data.artists[0].href}>link</a>
              <p>{data.name}</p>
              <p>{data.album_type}</p>
            </li>
          ))}</ul>
        )}
      </form>
    </div>
  )
}

