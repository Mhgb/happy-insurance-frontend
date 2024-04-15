import { useEffect, useState } from "react";
import FeedBackCard from "./FeedBackCard";
import { URL } from "../../utils/Constants";
import "./Feedback.css";

function Feedback() {
  const delay = 3000;

  const [feedbacks, updateFeedbacks] = useState([]);
  const [feedContent, setFeedContent] = useState("");
  const [feedTitle, setFeedTitle] = useState("");
  const [cardPosition, updateCardPosition] = useState(0);
  const [trigger, updateTrigger] = useState(false);

  useEffect(() => {
    fetch(URL + "/retrieve-feedbacks", {
      method: "GET",
    })
      .then((result) => result.json())
      .then((responseData) => {
        console.log(responseData);
        updateFeedbacks(responseData);
        updateTrigger(true);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      updateCardPosition((prevCardPosition) => {
        return prevCardPosition < feedbacks.length - 1
          ? prevCardPosition + 1
          : 0;
      });
    }, delay);
  }, [cardPosition, trigger]);

  const updateLatestFeedbacks = async () => {
    const result = await fetch(URL + "/retrieve-feedbacks", {
      method: "GET",
    });
    const responseData = await result.json();
    console.log(responseData);

    if (responseData !== undefined) {
      updateFeedbacks(responseData);
      updateTrigger(true);
    }
  };

  const handleFeedback = (e) => {
    e.preventDefault();
    fetch(URL + "/submit-feedback", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 100,
        feedContent: feedContent,
        feedTitle: feedTitle,
      }),
    })
      .then((result) => result.json())
      .then((responseData) => {
        if (responseData !== undefined) {
          alert("Feedback submitted successfully");
          updateLatestFeedbacks();
          console.log(responseData);
        }
      });

    setFeedContent("");
    setFeedTitle("");
  };

  return (
    <div className="feedback-page">
      <h2>Tell us about your experience</h2>
      <div className="feedback-container">
        <div className="feedback">
          <textarea
            name="feed-content"
            id="feed-content"
            cols="30"
            rows="10"
            value={feedContent}
            onChange={(e) => setFeedContent(e.target.value)}
            placeholder="Share your experience"
          ></textarea>
          <input
            type="text"
            name="feedback-title"
            id="feedback-title"
            value={feedTitle}
            onChange={(e) => setFeedTitle(e.target.value)}
            placeholder="Title of your Review"
            size="60"
          />
          <input
            type="submit"
            value="Submit Feedback"
            className="submit-btn"
            onClick={handleFeedback}
          />
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
      <div className="view-feedbacks-container">
        <h2>what our customers say</h2>
        <hr />
        <div className="feedback-cards-container">
          <div className="feedback-cards">
            {feedbacks[cardPosition] ? (
              <FeedBackCard feedback={feedbacks[cardPosition]} />
            ) : (
              <span className="no-feedbacks">
                <p>
                  We are awaiting for your <br />
                  <span>feedbacks 😊</span>
                </p>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
