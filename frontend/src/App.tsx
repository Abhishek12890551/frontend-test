import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./components/LandingPage";
import OnboardingWizard from "./components/Onboarding/OnboardingWizard";
import Dashboard from "./components/Dashboard/Dashboard";

const useOnboardingStatus = () => {
  const [isCompleted, setIsCompleted] = React.useState(() => {
    const data = localStorage.getItem("onboarding_user_data");
    if (data) {
      const parsedData = JSON.parse(data);
      return parsedData.onboardingCompleted || false;
    }
    return false;
  });

  const completeOnboarding = () => {
    setIsCompleted(true);
  };

  return { isCompleted, completeOnboarding };
};

function App() {
  const { isCompleted, completeOnboarding } = useOnboardingStatus();

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Onboarding */}
          <Route
            path="/onboarding"
            element={<OnboardingWizard onComplete={completeOnboarding} />}
          />

          {/* Dashboard - Protected route */}
          <Route
            path="/dashboard"
            element={
              isCompleted ? (
                <Dashboard />
              ) : (
                <Navigate to="/onboarding" replace />
              )
            }
          />

          {/* Catch all - redirect to landing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
