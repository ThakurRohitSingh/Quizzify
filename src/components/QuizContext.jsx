// QuizContext.js
import { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  return (
    <QuizContext.Provider value={{
      selectedTopic,
      setSelectedTopic,
      selectedQuestions,
      setSelectedQuestions,
      selectedDifficulty,
      setSelectedDifficulty
    }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};
