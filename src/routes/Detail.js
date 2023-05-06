import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
    console.log(json.data.movie.url);
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log("hahaha", movie);
  return (
    <div>
      <h1>{movie.title} </h1>
      <h2>⭐️ : {movie.rating}</h2>
      <img src={movie.medium_cover_image} />
      <div>
        <a href={movie.url}> {movie.title} 홈페이지 바로가기</a>
      </div>
    </div>
  );
}
export default Detail;
