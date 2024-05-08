export async function generateMetadata({ params, searchParams }, parent) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();
  return {
    title: `Next.js | ${post.title}`,
  };
}

export default async function PostPage({ params }) {
  console.log(params);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await response.json();
  return (
    <div>
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

// Open the page in your browser and check the console in your terminal. You should see an object with a key of id and a value of the id you used in the URL.
