const Feedback = ({ rating, totalFeedback, positiveFeedback }) => {
  return (
    <>
      <p>Good: {rating.good}</p>
      <p>Neutral: {rating.neutral}</p>
      <p>Bad: {rating.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}</p>
    </>
  );
};

export default Feedback;
