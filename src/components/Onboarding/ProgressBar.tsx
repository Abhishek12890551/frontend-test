import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps,
}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl backdrop-blur-sm border border-white/20">
            <Sparkles className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <span className="text-lg font-semibold text-white">
              Step {currentStep} of {totalSteps}
            </span>
            <p className="text-white/60 text-sm">Building your profile</p>
          </div>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {Math.round(progress)}%
          </span>
          <p className="text-white/60 text-sm">Complete</p>
        </div>
      </div>

      <div className="relative">
        <div className="w-full bg-white/10 backdrop-blur-sm rounded-2xl h-3 overflow-hidden border border-white/20">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl relative overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.8, ease: "easeInOut" }}>
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
          </motion.div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          const stepLabels = [
            "Personal Info",
            "Business Details",
            "Preferences",
          ];

          return (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              {" "}
              <motion.div
                className={`relative w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                  isCompleted
                    ? "bg-gradient-to-br from-green-500 to-emerald-600 border-green-400 shadow-lg shadow-green-500/25"
                    : isCurrent
                    ? "bg-gradient-to-br from-blue-500 to-purple-600 border-blue-400 shadow-lg shadow-blue-500/25"
                    : "bg-white/10 backdrop-blur-sm border-white/30"
                }`}
                animate={{
                  scale: isCurrent ? 1.1 : 1,
                  transition: { duration: 0.3 },
                }}
                whileHover={{ scale: 1.15, transition: { duration: 0.2 } }}>
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6 text-white" />
                ) : (
                  <span
                    className={`text-lg font-bold ${
                      isCurrent ? "text-white" : "text-white/60"
                    }`}>
                    {stepNumber}
                  </span>
                )}

                {isCurrent && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/50 to-purple-600/50"
                    animate={{
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.div>
              <span
                className={`text-sm font-medium text-center transition-colors duration-300 ${
                  isCompleted || isCurrent ? "text-white" : "text-white/50"
                }`}>
                {stepLabels[index]}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
