import image1 from "../../images/pexels-kelvin-agustinus-1096141.jpg";

export default function BlogCard({ featured, blog }) {
  return (
    <div className="blog-card">
      <img src={image1} alt="not available" />
      <div>
        {featured && <span className="featured-label">Featured</span>}
        <h2>{blog.topic}</h2>
        <p>{blog.content}</p>
        <button className="read-more-btn">Read more</button>
      </div>
    </div>
  );
}
