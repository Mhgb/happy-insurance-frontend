export function BlogCard1({ post }) {
  return (
    <div className="blog-card-1">
      <h2>{post.topic}</h2>
      <p>{post.content}</p>
      <button className="read-more-btn">Read more</button>
    </div>
  );
}
