import { MagnifyingGlass, Student } from "phosphor-react";
import { Gear, Star } from "phosphor-react";
import { Bell } from "phosphor-react";
import { List } from "phosphor-react";
import img from "./img/music.png";
import styles from "./header.module.css";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
export function Header() {
  const [dado, setdado] = useState("");
  const [datas, setdatas] = useState([]);

  const token =
    "BQAq_fqfJZk29Bd-4mUEVfEWzeh_wq4hPdtiWnohKEGNbUCznV-RXv0iMzZ-YWsuxAa-BPVRjafOriqXWYeSjLLWifsPw0k5ft7GR6_9SzUov4izXk4";

  function handleChangeSearchValue(e) {
    setdado(e.target.value);
  }

  useEffect(() => {
    console.log("data aqui ", datas);
    console.log(datas.length);

    // console.log("este sao os albuns", datas.albums.items[0].name)
  }, [datas]);
  async function handleSubmit() {
    // e.preventDefault();

    const { data } = await api.get(`/v1/search?q=${dado}&type=track`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(data);
    console.log(data.albums);

    const dito = data.tracks.items.map((item) => item);

    setdatas(dito);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles["left-container"]}>
          <img src={img} alt="Music" className={styles.iconImage} />

          <div className={styles.searchBar}>
            <MagnifyingGlass size={20} className={styles.icon} />
            <input
              type="text"
              placeholder="Search for songs, artists, etc."
              className={styles.input}
              onChange={handleChangeSearchValue}
              value={dado}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit();
                }
              }}
            />
          </div>
        </div>

        <div className={styles["right-container"]}>
          <button className={styles.premiumButton}>Explore Premium</button>
          <div className={styles.iconsGroup}>
            <button>
              <Gear size={30} className={styles.iconGear} />
            </button>
            <button>
              <Bell size={30} className={styles.iconBell} />
            </button>
            <button>
              <List size={30} className={styles.iconList} />
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className={styles.musics}>
          <form onSubmit={handleSubmit}>
            {/* <input
              onChange={handleChangeSearchValue}
              type="text"
              value={dado}
            />
            <button type="submit">enviar</button> */}

            {datas.length > 0 && (
              <ul className={styles.album}>
                {datas.map((data, index) => (
                  <li key={index} style={{ "margin-top": "20px" }}>
                    <img
                      className={styles.img1}
                      src={data.album.images[0].url}
                      alt={data.album.name}
                    />
                    <section className={styles.content}>
                      <div className={styles.textContent}>
                        <h1>{data.name}</h1>
                        <p>{data.artists[0].name}</p>
                        <div className={styles.favorite}>
                          <audio controls>
                            <source src={data.preview_url} type="audio/mpeg" />
                            Your browser does not support the audio element.
                          </audio>
                          <button>
                            <Star size={32} color="#c8cb1a" weight="fill" />
                          </button>
                        </div>
                      </div>
                    </section>
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>
      </main>
    </>
  );
}
