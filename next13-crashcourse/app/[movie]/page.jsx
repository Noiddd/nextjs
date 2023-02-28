export default async function MovieDetail({ params }) {
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

  return (
    <div>
      <h1>Movie Detail</h1>
    </div>
  );
}
