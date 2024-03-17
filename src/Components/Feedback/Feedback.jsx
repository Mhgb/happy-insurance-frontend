import "./Feedback.css";

function Feedback({ setComponent }) {
  return (
    <div>
      <div className="feedback-container">
        <div className="feedback">
          <textarea
            name="feed-content"
            id="feed-content"
            cols="30"
            rows="10"
            placeholder="Share your experience"
          ></textarea>
          <input
            type="text"
            name="feedback-title"
            id="feedback-title"
            placeholder="Title of your Review"
            size="60"
          />
          <input type="submit" value="Submit Feedback" className="submit-btn" />
        </div>
        <div className="tips">
          <h3>Tips for Good Review</h3>
          <ul>
            <li>
              Tell us about your buying experience and why you selected the
              insurance company
            </li>
            <li>List out how Happy insurance helped you</li>
            <li>Give a suitable title to your review</li>
            <li>Do not use all caps and avoid sharing personal details here</li>
          </ul>
        </div>
      </div>
      <footer>
        <p className="navigate" onClick={() => setComponent("LandingPage")}>
          Back
        </p>
      </footer>
    </div>
  );
}

export default Feedback;
