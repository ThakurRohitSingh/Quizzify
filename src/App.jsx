import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SelectTopics from './components/SelectTopics';
import Quiz from './components/Quiz';
import { QuizProvider } from './components/QuizContext';
import FogotPassword from './components/ForgotPassword';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/Sign';

const App = () => {
  return (
   <>
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/forgotpassword" element={<FogotPassword/>} />
          <Route path="/select" element={<SelectTopics />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
   </>
  );
};

export default App;
