import Movie from "./Movie";

export default async function Home() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.API_KEY,
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const data = await fetch(
    "https://moviesdatabase.p.rapidapi.com/titles/x/titles-by-ids?idsList=tt0001702%2Ctt0001856%2Ctt0001856",
    options
  );

  const res = await data.json();

  console.log(res.results);

  return (
    <main>
      <h1>Hello next13!!</h1>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.titleText.text}
            releaseDate={movie.releaseDate}
          />
        ))}
      </div>
    </main>
  );
}
