import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SelectTopics from './components/SelectTopics';
import Quiz from './components/Quiz';
import { QuizProvider } from './components/QuizContext';
import FogotPassword from './components/ForgotPassword';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/Sign';
import AuthProvider from './components/Auth/AuthProvider';
import ProtectedRoutes from './components/Auth/ProtectedRoutes';

const App = () => {
  return (
   <>
    <QuizProvider>
      <BrowserRouter>
       <AuthProvider>
       <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/forgotpassword" element={<FogotPassword/>} />
          {/* reset Password you need to add */}
          <Route path="/select" element={<ProtectedRoutes>
            <SelectTopics />
          </ProtectedRoutes>} />
          <Route path="/quiz" element={<ProtectedRoutes>
            <Quiz />
          </ProtectedRoutes>} />
        </Routes>
       </AuthProvider>
      </BrowserRouter>
    </QuizProvider>
   </>
  );
};

export default App;
