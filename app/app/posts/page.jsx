import Link from "next/link";
import React from "react";

export default async function Posts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`/posts/${post.id}`} >
              <div>{post.id}</div>
              <div>{post.title}</div>
              <div>{post.body}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
