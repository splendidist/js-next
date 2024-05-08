import Link from "next/link";

export const metadata = {
  title: "Next.js | Posts",
  description: "A simple blog built with Next.js",
};

export default async function Posts({ searchParams }) {
  console.log("searchParams", searchParams);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  if (searchParams.sort === "desc") {
    posts.reverse();
  }

  return (
    <div>
      <h1>Posts</h1>
      <Link href="/posts?sort=desc">Sort ascending</Link> -{" "}
      <Link href="/posts?sort=asc">Sort descending</Link>
      <div className="post-list">
        {" "}
        {posts.map((post) => {
          return (
            <Link href={`/posts/${post.id}`} key={post.id}>
              {post.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
