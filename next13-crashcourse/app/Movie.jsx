import Link from "next/link";
import Image from "next/image";

export default function Movie({ id, title, releaseDate }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>
        {releaseDate.day}/{releaseDate.month}/{releaseDate.year}
      </h2>
      <Link href={`/${id}`}>
        <Image
          src="https://m.media-amazon.com/images/M/MV5BYmVhNGZlZTEtNjFmMS00MjEyLThkZmMtMTIwZjRjNzFkYjU3XkEyXkFqcGdeQXVyMDUyOTUyNQ@@._V1_.jpg"
          width={800}
          height={800}
        />
      </Link>
    </div>
  );
}
