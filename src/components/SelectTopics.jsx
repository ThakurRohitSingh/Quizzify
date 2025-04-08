import { useQuiz } from './QuizContext';
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/SelectTopics.module.css';

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

  const numberOfQuestions = [5, 10, 15, 20, 30, 40, 50];
  const difficultyLevels = ["Easy", "Medium", "Hard"];

  const handleSelection = (type, value) => {
    if (type === 'topic') setSelectedTopic(value);
    if (type === 'questions') setSelectedQuestions(value);
    if (type === 'difficulty') setSelectedDifficulty(value);
  };

  const handleStartQuiz = () => {
    if (selectedTopic && selectedQuestions && selectedDifficulty) {
      navigate("/quiz");
    } else {
      alert("Please select topic, number of questions, and difficulty level.");
    }
  };

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

      <div className={styles.section}>
        <h2 className={styles.title}>Select Number of Questions</h2>
        <div className={styles.buttonGroup}>
          {numberOfQuestions.map((question, index) => (
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

      <div className={styles.section}>
        <h2 className={styles.title}>Select Difficulty</h2>
        <div className={styles.buttonGroup}>
          {difficultyLevels.map((level, index) => (
            <button
              key={index}
              onClick={() => handleSelection('difficulty', level)}
              className={`${styles.button} ${selectedDifficulty === level ? styles.selected : ''}`}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

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
