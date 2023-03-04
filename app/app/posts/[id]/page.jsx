import React from "react";

async function getPostbyId(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: { revalidate: 5 }, // if user call within 10 seconds of calling first time, it will not rerender
      // cache: "no-store", // always run when a request comes in
    }
  );
  const post = await response.json();
  return post;
}

export default async function PostPageWithId({ params, searchParams }) {
  const post = await getPostbyId(params.id);
  return (
    <div>
      <h1>Page with id</h1>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </div>
  );
}
