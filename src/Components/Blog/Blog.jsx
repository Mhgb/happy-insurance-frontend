function Blog({ setComponent }) {
  return (
    <div>
      <a href="https://www.tickertape.in/blog/how-to-invest/insurance/">
        Ticker tape- Acticles about Insurance
      </a>
      <footer>
        <p className="navigate" onClick={() => setComponent("LandingPage")}>
          Back
        </p>
      </footer>
    </div>
  );
}

export default Blog;
