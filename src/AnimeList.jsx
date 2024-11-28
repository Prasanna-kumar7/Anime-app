import React from "react";

const AnimeList = ({ animeList, setanimeInfo }) => {
  return (
    <>
      {animeList
        ? animeList.map((anime, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => setanimeInfo(anime)}
              >
                <img src={anime.images.jpg.large_image_url} alt={anime.title} />
                <div className="anime-info">
                  <h4>{anime.title}</h4>
                </div>
              </div>
            );
          })
        : "Not Found"}
    </>
  );
};

export default AnimeList;
