import React, { useEffect, useState, useCallback, useMemo } from "react";
import { getMusicFromApi } from "../actions";
import Card from "../components/card/Card";
import styles from "./musicApp.module.scss";

const MusicApp = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [albumData, setAlbumData] = useState([]);

  const getMusicData = useCallback(async () => {
    const data = await getMusicFromApi(searchValue);
    setAlbumData(data?.tracks?.items || []);
  }, [searchValue]);

  useEffect(() => {
    getMusicData();
  }, []);

  const renderAlbums = useMemo(() => {
    return albumData.map((data) => {
      return (
        <div className={styles.card} id={data.id}>
          <Card cardData={data} />
        </div>
      );
    });
  }, [albumData]);

  const handleSearch = () => {
    if(searchValue) {
        getMusicData();
    }
  }

  return (
    <div className={styles.musicContainer}>
      <div className={styles.header}>
        <div className={styles.title}>D-MUSIC</div>
        <div className={styles.inputBox}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={styles.input}
            placeholder="search here..."
          />
        </div>
        <button className={styles.searchButton} onClick={handleSearch}>Search</button>
      </div>
      <div className={styles.container}>{renderAlbums}</div>
    </div>
  );
};
export default MusicApp;
