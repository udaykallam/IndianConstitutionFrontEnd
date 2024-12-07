import React, { useEffect, useState } from "react";
import api from "../api/api";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    api.get("/quizzes")
      .then((response) => setQuizzes(response.data))
      .catch((error) => console.error("Error fetching quizzes:", error));
  }, []);

  const handleAnswerChange = (index, answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = answer;
    setUserAnswers(updatedAnswers);
  };

  const evaluateQuiz = () => {
    const questionIds = quizzes.map((quiz) => quiz.id);
    api.post("/quizzes/evaluate", { questionIds, userAnswers })
      .then((response) => setScore(response.data))
      .catch((error) => console.error("Error evaluating quiz:", error));
  };

  return (
    <div>
      <h1>Quizzes</h1>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={quiz.id}>
            <p>{quiz.question}</p>
            <ul>
              {[quiz.option1, quiz.option2, quiz.option3, quiz.option4].map(
                (option, i) => (
                  <li key={i}>
                    <label>
                      <input
                        type="radio"
                        name={`quiz-${index}`}
                        value={option}
                        onChange={() => handleAnswerChange(index, option)}
                      />
                      {option}
                    </label>
                  </li>
                )
              )}
            </ul>
          </li>
        ))}
      </ul>
      <button onClick={evaluateQuiz}>Submit</button>
      {score !== null && <p>Your score: {score}</p>}
    </div>
  );
};

export default QuizList;
