export default function CommentPage({ params }) {
  console.log(params);
  return (
    <h1>
      Post Page ID: {params.id}, Comment ID: {params.commentId}
    </h1>
  );
}

//http://localhost:3000/posts/1/2
