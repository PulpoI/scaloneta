import React from "react";

export default function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <div key={post.id}>
          <li>{post.title.rendered}</li>
          <span>{post.content.rendered}</span>
        </div>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://scaloneta.pulpol.com.ar/wp-json/wp/v2/posts/"
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
