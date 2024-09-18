import { MagnifyingGlass, Student } from "phosphor-react";
import {Gear} from "phosphor-react";
import { Bell } from "phosphor-react";
import { List } from "phosphor-react";
import img from "./img/music.png";
import styles from "./header.module.css";
export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["left-container"]}>
        <img src={img} alt="Music" className={styles.iconImage} />

        <div className={styles.searchBar}>
          <MagnifyingGlass size={20} className={styles.icon} />
          <input
            type="text"
            placeholder="Search for songs, artists, etc."
            className={styles.input}
          />
        </div>
      </div>

      <div className={styles["right-container"]}>
        <button className={styles.premiumButton}>Explore Premium</button>
        <div className={styles.iconsGroup}>
            <Gear size={30} className={styles.iconGear} />
            <Bell size={30} className={styles.iconBell} />
            <List size={30} className={styles.iconList} />
        </div>
      </div>
    </header>
  );
}
