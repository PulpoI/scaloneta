import React from "react";

export default function Post({ post }) {
  console.log(post);
  return <div>post slug: {post.slug}</div>;
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://scaloneta.pulpol.com.ar/wp-json/wp/v2/posts/"
  );
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://scaloneta.pulpol.com.ar/wp-json/wp/v2/posts?slug=${params.slug}`
  );
  const posts = await res.json();

  return {
    props: {
      post: posts[0],
    },
  };
}
