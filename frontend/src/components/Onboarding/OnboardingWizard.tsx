import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import type {
  OnboardingData,
  PersonalInfo,
  BusinessInfo,
  Preferences,
} from "../../types/onboarding";
import ProgressBar from "./ProgressBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

interface OnboardingWizardProps {
  onComplete: () => void;
}

const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ onComplete }) => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    personalInfo: { name: "", email: "" },
    businessInfo: { companyName: "", industry: "", companySize: "" },
    preferences: { theme: "light", dashboardLayout: "grid" },
    onboardingCompleted: false,
  });
  const [errors, setErrors] = useState<{
    personalInfo: Partial<Record<keyof PersonalInfo, string>>;
    businessInfo: Partial<Record<keyof BusinessInfo, string>>;
    preferences: Partial<Record<keyof Preferences, string>>;
  }>({
    personalInfo: {},
    businessInfo: {},
    preferences: {},
  });
  const validateStep1 = (): boolean => {
    const newErrors: Partial<Record<keyof PersonalInfo, string>> = {};

    if (!onboardingData.personalInfo.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!onboardingData.personalInfo.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(onboardingData.personalInfo.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors((prev) => ({ ...prev, personalInfo: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Partial<Record<keyof BusinessInfo, string>> = {};

    if (!onboardingData.businessInfo.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!onboardingData.businessInfo.industry) {
      newErrors.industry = "Please select an industry";
    }

    if (!onboardingData.businessInfo.companySize) {
      newErrors.companySize = "Please select company size";
    }

    setErrors((prev) => ({ ...prev, businessInfo: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = (): boolean => {
    const newErrors: Partial<Record<keyof Preferences, string>> = {};

    if (!onboardingData.preferences.theme) {
      newErrors.theme = "Please select a theme";
    }

    if (!onboardingData.preferences.dashboardLayout) {
      newErrors.dashboardLayout = "Please select a dashboard layout";
    }

    setErrors((prev) => ({ ...prev, preferences: newErrors }));
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    let isValid = false;

    switch (currentStep) {
      case 1:
        isValid = validateStep1();
        break;
      case 2:
        isValid = validateStep2();
        break;
      case 3:
        isValid = validateStep3();
        break;
      default:
        isValid = true;
    }

    if (isValid && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep3()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const completedData = {
      ...onboardingData,
      onboardingCompleted: true,
    };

    localStorage.setItem("onboarding_user_data", JSON.stringify(completedData));
    onComplete();
    navigate("/dashboard");
  };

  const updatePersonalInfo = (data: PersonalInfo) => {
    setOnboardingData((prev) => ({ ...prev, personalInfo: data }));
    // Clear errors when user starts typing
    if (errors.personalInfo.name && data.name) {
      setErrors((prev) => ({
        ...prev,
        personalInfo: { ...prev.personalInfo, name: undefined },
      }));
    }
    if (errors.personalInfo.email && data.email) {
      setErrors((prev) => ({
        ...prev,
        personalInfo: { ...prev.personalInfo, email: undefined },
      }));
    }
  };

  const updateBusinessInfo = (data: BusinessInfo) => {
    setOnboardingData((prev) => ({ ...prev, businessInfo: data }));
    // Clear errors when user makes selections
    Object.keys(data).forEach((key) => {
      if (
        data[key as keyof BusinessInfo] &&
        errors.businessInfo[key as keyof BusinessInfo]
      ) {
        setErrors((prev) => ({
          ...prev,
          businessInfo: { ...prev.businessInfo, [key]: undefined },
        }));
      }
    });
  };

  const updatePreferences = (data: Preferences) => {
    setOnboardingData((prev) => ({ ...prev, preferences: data }));
    // Clear errors when user makes selections
    Object.keys(data).forEach((key) => {
      if (
        data[key as keyof Preferences] &&
        errors.preferences[key as keyof Preferences]
      ) {
        setErrors((prev) => ({
          ...prev,
          preferences: { ...prev.preferences, [key]: undefined },
        }));
      }
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            data={onboardingData.personalInfo}
            onUpdate={updatePersonalInfo}
            errors={errors.personalInfo}
          />
        );
      case 2:
        return (
          <Step2
            data={onboardingData.businessInfo}
            onUpdate={updateBusinessInfo}
            errors={errors.businessInfo}
          />
        );
      case 3:
        return (
          <Step3
            data={onboardingData.preferences}
            onUpdate={updatePreferences}
            errors={errors.preferences}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated background elements - matching dashboard */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-4xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
        {/* Background decoration - glassmorphic style */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-3xl opacity-50" />

        <div className="relative z-10">
          <ProgressBar currentStep={currentStep} totalSteps={3} />
          <AnimatePresence mode="wait">
            <div key={currentStep}>{renderStep()}</div>
          </AnimatePresence>{" "}
          {/* Navigation buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-between mt-8 pt-6 border-t border-white/20">
            <motion.button
              onClick={handleBack}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                currentStep === 1
                  ? "text-white/30 cursor-not-allowed"
                  : "text-white/70 hover:text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40"
              }`}
              whileHover={currentStep > 1 ? { scale: 1.02 } : {}}
              whileTap={currentStep > 1 ? { scale: 0.98 } : {}}>
              Back
            </motion.button>

            {currentStep < 3 ? (
              <motion.button
                onClick={handleNext}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}>
                Next
              </motion.button>
            ) : (
              <motion.button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl font-medium hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed border border-white/20 backdrop-blur-sm"
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}>
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Completing Setup...</span>
                  </div>
                ) : (
                  "Complete Setup"
                )}
              </motion.button>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default OnboardingWizard;
