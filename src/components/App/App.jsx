import "./App.module.css";
import { useState } from "react";
import { useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

const App = () => {
  const [rating, setRating] = useState(() => {
    const savedRatings = localStorage.getItem("my-ratings");
    if (savedRatings != null) {
      console.log(savedRatings);
      return JSON.parse(savedRatings);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = (feedbackType) => {
    setRating({
      ...rating,
      [feedbackType]: rating[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setRating({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    localStorage.setItem("my-ratings", JSON.stringify(rating));
  }, [rating]);

  const totalFeedback = rating.good + rating.neutral + rating.bad;
  const positiveFeedback = Math.round(
    ((rating.good + rating.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        onUpdateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        onResetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          rating={rating}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
