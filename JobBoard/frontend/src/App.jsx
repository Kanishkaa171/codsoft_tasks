import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Jobs from "./pages/Jobs.jsx";
import ScrollAnimations from "./components/ScrollAnimations.jsx";
import CareerInsights from "./pages/CareerInsights.jsx";
import ResumeGuide from "./pages/ResumeGuide.jsx";
import InterviewGuide from "./pages/InterviewGuide.jsx";
import CareerGrowthGuide from "./pages/CareerGrowthGuide.jsx";
import JobSearchGuide from "./pages/JobSearchGuide.jsx";
import TechnologyGuide from "./pages/TechnologyGuide.jsx";
import FirstJobGuide from "./pages/FirstJobGuide.jsx";
import About from "./pages/About.jsx";
import JobDetail from "./pages/JobDetail.jsx";
import Application from "./pages/Application.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import CandidateDashboard from "./pages/CandidateDashboard.jsx";
import EmployerDashboard from "./pages/EmployerDashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollAnimations />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/career-insights" element={<CareerInsights />} />
        <Route path="/career-insights/resume" element={<ResumeGuide />} />
        <Route path="/career-insights/interview" element={<InterviewGuide />} />
        <Route path="/career-insights/growth" element={<CareerGrowthGuide />} />
        <Route path="/career-insights/job-search" element={<JobSearchGuide />} />
        <Route path="/career-insights/technology" element={<TechnologyGuide />} />
        <Route path="/career-insights/first-job" element={<FirstJobGuide />} />
        <Route path="/jobs/:id/apply" element={<Application />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;