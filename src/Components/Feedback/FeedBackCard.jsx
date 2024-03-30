export default function FeedBackCard({ feedback }) {
  return (
    <div className="feedback-card">
      <h2>{feedback.title}</h2>
      <p>{feedback.content}</p>
    </div>
  );
}
