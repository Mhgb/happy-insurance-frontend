import InsuranceBlogs from "../../utils/InsuranceBlogs.json";
import {
  morePosts as MorePosts,
  featuredPosts as FeaturedPosts,
} from "../../utils/Constants";
import BlogCard from "./BlogCard";
import "./BlogCard.css";
import { BlogCard1 } from "./BlogCard1";

function Blog() {
  return (
    <div className="blog-container">
      <div className="featured-post">
        <h2 className="post-heading">Featured Blogs</h2>
        <div className="featured-post-container">
          {FeaturedPosts.map((blog) => (
            <BlogCard key={blog.id} featured="true" blog={blog} />
          ))}
        </div>
      </div>
      <div className="recent-posts-coontainer">
        <h2 className="post-heading">Recent Posts</h2>
        <div className="blogs">
          {InsuranceBlogs.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="post-heading">More Posts</h2>
        <div className="more-posts-container">
          {MorePosts.map((post) => (
            <BlogCard1 post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
