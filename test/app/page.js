import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>HOME PAGE</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum error
        iure nisi nesciunt quod alias, iste eos. Id, deleniti nobis debitis
        asperiores quas corporis atque, dolorum ipsum officia magnam doloremque.
      </p>
      <Link href="/about">About Page</Link>
    </>
  );
}
