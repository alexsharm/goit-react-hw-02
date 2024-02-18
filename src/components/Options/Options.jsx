const Options = ({ onUpdateFeedback, totalFeedback, onResetFeedback }) => {
  return (
    <>
      <button onClick={() => onUpdateFeedback("good")}>Good</button>
      <button onClick={() => onUpdateFeedback("neutral")}>Neutral</button>
      <button onClick={() => onUpdateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && (
        <button onClick={() => onResetFeedback()}>Reset</button>
      )}
    </>
  );
};

export default Options;
