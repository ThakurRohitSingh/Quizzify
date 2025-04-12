import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { decode } from "html-entities";
import Question from "../components/Question";
import Loader from "./Loader";
import { useQuiz } from "./QuizContext";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [restartGame, setRestartGame] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    selectedTopic,         
    selectedQuestions,
    selectedDifficulty
  } = useQuiz();


  //Navigate to the selectTopics component
   const navigate = useNavigate()

  // Shuffle and decode options
  const choices = (incorrect_answers, correct_answer) => {
    const allOptions = [correct_answer, ...incorrect_answers].sort(() => Math.random() - 0.5);
    return allOptions.map((item) => ({
      id: nanoid(),
      choice: decode(item),
    }));
  };

  // Format API data
  const formatQuestions = (data) => {
    return data.map((item) => ({
      id: nanoid(),
      question: decode(item.question),
      correctAnswer: decode(item.correct_answer),
      selectedAnswer: "",
      options: choices(item.incorrect_answers, item.correct_answer),
    }));
  };

  useEffect(() => {
    if (!selectedTopic || !selectedQuestions || !selectedDifficulty) {
      navigate("/select");
      return;
    }
      setLoading(true);
      const url = `https://opentdb.com/api.php?amount=${selectedQuestions}&category=${selectedTopic}&difficulty=${selectedDifficulty.toLowerCase()}&type=multiple`;
      console.log(url)
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const formatted = formatQuestions(data.results);
          setQuestions(formatted);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching quiz data:", error);
          setLoading(false);
        });
   }, [restartGame, selectedTopic, selectedQuestions, selectedDifficulty]);

  // Handle answer selection
  const handleButtonClick = (choice, id) => {
    setQuestions((prev) =>
      prev.map((q) =>
        q.id === id ? { ...q, selectedAnswer: choice } : q
      )
    );
  };

  // Check answers
  const checkAnswers = () => {
    let correctCount = 0;
    let allAnswered = true;

    for (let q of questions) {
      if (!q.selectedAnswer) {
        allAnswered = false;
        break;
      }
      if (q.selectedAnswer === q.correctAnswer) {
        correctCount++;
      }
    }

    if (allAnswered) {
      setCorrectAnswers(correctCount);
      setIsChecked(true);
    } else {
      alert("Please answer all questions before checking!");
    }
  };

  // Restart quiz
  const handlePlayAgain = () => {
    setRestartGame((prev) => !prev);
    setCorrectAnswers(0);
    setIsChecked(false);

    navigate("/select")
  };

  // Render questions
  const questionElements = questions.map((q) => (
    <Question
      key={q.id}
      {...q}
      handleButtonClick={handleButtonClick}
      isChecked={isChecked}
    />
  ));

  return loading ? (
    <Loader />
  ) : (
    <div className="questions-container">
      {questionElements}
      <div className="answer-button-container">
        <button
          className="check-answer"
          onClick={isChecked ? handlePlayAgain : checkAnswers}
        >
          {isChecked ? "Play Again" : "Check Answers"}
        </button>
        {isChecked && (
          <h1 className="answer">
            You Scored {correctAnswers}/{questions.length}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Quiz;
