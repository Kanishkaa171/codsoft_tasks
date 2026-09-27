import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateQuiz from "./pages/CreateQuiz";
import Quizzes from "./pages/Quizzes";
import MyQuizzes from "./pages/MyQuizzes";
import TakeQuiz from "./pages/TakeQuiz";
import Results from "./pages/Results";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreateQuiz />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/my-quizzes" element={<MyQuizzes />} />
        <Route path="/quiz/:id" element={<TakeQuiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;