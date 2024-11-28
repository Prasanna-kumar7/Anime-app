import React, { useEffect, useState } from "react";
import AnimeList from "../AnimeList";
import AnimeInfo from "../AnimeInfo";

const Navbar = () => {
  const [animeData, setanimeData] = useState();
  const [search, setSearch] = useState("Naruto");
  const [animeInfo, setanimeInfo] = useState();

  const fetchData = async () => {
    const resData = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&swf`
    );
    const jsonData = await resData.json();
    setanimeData(jsonData.data);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <>
      <nav>
        <div className="nav_container">
          <div className="logo">Anime App</div>

          <div className="nav_search">
            <input
              type="search"
              placeholder="Search Anime"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="nav_links">
            <a href="">Home</a>
            <a href="">Most Popular</a>
            <a href="">Top Airing</a>
          </div>

          <div>
            <button>Login</button>
          </div>
        </div>
      </nav>
      <div>
        <div className="container">
          <div className="anime_info">
            {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
          </div>

          <div className="anime_data">
            <div className="data">
              <AnimeList animeList={animeData} setanimeInfo={setanimeInfo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
