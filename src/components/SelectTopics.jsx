import { useQuiz } from './QuizContext';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/SelectTopics.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SelectTopics = () => {
  const navigate = useNavigate();
  const {
    selectedTopic,
    setSelectedTopic,
    selectedQuestions,
    setSelectedQuestions,
    selectedDifficulty,
    setSelectedDifficulty
  } = useQuiz();

  const [availableDifficulties, setAvailableDifficulties] = useState({
    easy: 0,
    medium: 0,
    hard: 0
  });

  const [numberOfQuestionsOptions, setNumberOfQuestionsOptions] = useState([]);

  const topicsArray = [
    { id: 9, name: "General Knowledge" },
    { id: 10, name: "Entertainment: Books" },
    { id: 11, name: "Entertainment: Film" },
    { id: 12, name: "Entertainment: Music" },
    { id: 13, name: "Entertainment: Musicals & Theatres" },
    { id: 14, name: "Entertainment: Television" },
    { id: 15, name: "Entertainment: Video Games" },
    { id: 16, name: "Entertainment: Board Games" },
    { id: 17, name: "Science & Nature" },
    { id: 18, name: "Science: Computers" },
    { id: 19, name: "Science: Mathematics" },
    { id: 20, name: "Mythology" },
    { id: 21, name: "Sports" },
    { id: 22, name: "Geography" },
    { id: 23, name: "History" },
    { id: 24, name: "Politics" },
    { id: 25, name: "Art" },
    { id: 26, name: "Celebrities" },
    { id: 27, name: "Animals" },
    { id: 28, name: "Vehicles" },
    { id: 29, name: "Entertainment: Comics" },
    { id: 30, name: "Science: Gadgets" },
    { id: 31, name: "Entertainment: Japanese Anime & Manga" },
    { id: 32, name: "Entertainment: Cartoon & Animations" }
  ];

  const handleSelection = (type, value) => {
    if (type === 'topic') {
      setSelectedTopic(value);
      setSelectedDifficulty(null);
      setSelectedQuestions(null);
      setNumberOfQuestionsOptions([]);
    }

    if (type === 'difficulty') {
      setSelectedDifficulty(value);
      setSelectedQuestions(null);
      let count = 0;

      if (value === 'Easy') count = availableDifficulties.easy;
      if (value === 'Medium') count = availableDifficulties.medium;
      if (value === 'Hard') count = availableDifficulties.hard;

      const base = [5, 10, 15, 20, 25, 30, 40, 50];
      const filtered = base.filter(q => q <= count);
      setNumberOfQuestionsOptions(filtered);
    }

    if (type === 'questions') {
      setSelectedQuestions(value);
    }
  };

  const handleStartQuiz = () => {
    if (selectedTopic && selectedQuestions && selectedDifficulty) {
      navigate("/quiz");
    } else {
      alert("Please select topic, number of questions, and difficulty level.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (selectedTopic) {
        try {
          const url = `https://opentdb.com/api_count.php?category=${selectedTopic}`;
          const response = await axios.get(url);
          const counts = response.data.category_question_count;

          setAvailableDifficulties({
            easy: counts.total_easy_question_count,
            medium: counts.total_medium_question_count,
            hard: counts.total_hard_question_count
          });
        } catch (err) {
          console.error("Error fetching question counts:", err);
          setAvailableDifficulties({ easy: 0, medium: 0, hard: 0 });
        }
      }
    };

    fetchData();
  }, [selectedTopic]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Select Topics</h1>

      <div className={styles.section}>
        {topicsArray.map((topic) => (
          <button
            key={topic.id}
            onClick={() => handleSelection('topic', topic.id)}
            className={`${styles.button} ${selectedTopic === topic.id ? styles.selected : ''}`}
          >
            {topic.name}
          </button>
        ))}
      </div>

      {selectedTopic && (
        <div className={styles.section}>
          <h2 className={styles.title}>Select Difficulty</h2>
          <div className={styles.buttonGroup}>
            {availableDifficulties.easy > 0 && (
              <button
                onClick={() => handleSelection('difficulty', 'Easy')}
                className={`${styles.button} ${selectedDifficulty === 'Easy' ? styles.selected : ''}`}
              >
                Easy ({availableDifficulties.easy})
              </button>
            )}
            {availableDifficulties.medium > 0 && (
              <button
                onClick={() => handleSelection('difficulty', 'Medium')}
                className={`${styles.button} ${selectedDifficulty === 'Medium' ? styles.selected : ''}`}
              >
                Medium ({availableDifficulties.medium})
              </button>
            )}
            {availableDifficulties.hard > 0 && (
              <button
                onClick={() => handleSelection('difficulty', 'Hard')}
                className={`${styles.button} ${selectedDifficulty === 'Hard' ? styles.selected : ''}`}
              >
                Hard ({availableDifficulties.hard})
              </button>
            )}
          </div>
        </div>
      )}

      {selectedDifficulty && (
        <div className={styles.section}>
          <h2 className={styles.title}>Select Number of Questions</h2>
          <div className={styles.buttonGroup}>
            {numberOfQuestionsOptions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleSelection('questions', question)}
                className={`${styles.button} ${selectedQuestions === question ? styles.selected : ''}`}
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handleStartQuiz}
        className={styles.startButton}
        disabled={!(selectedTopic && selectedQuestions && selectedDifficulty)}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default SelectTopics;
