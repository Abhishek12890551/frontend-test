import React from "react";
import { motion } from "framer-motion";
import { Settings, Palette, Layout, Star } from "lucide-react";
import type { Preferences } from "../../types/onboarding";

interface Step3Props {
  data: Preferences;
  onUpdate: (data: Preferences) => void;
  errors: Partial<Record<keyof Preferences, string>>;
}

const Step3: React.FC<Step3Props> = ({ data, onUpdate, errors }) => {
  const handleChange = (field: keyof Preferences, value: string) => {
    onUpdate({ ...data, [field]: value });
  };
  const themeOptions = [
    {
      value: "light",
      label: "Light",
      icon: "☀️",
      description: "Clean and bright interface",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      value: "dark",
      label: "Dark",
      icon: "🌙",
      description: "Easy on the eyes",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      value: "auto",
      label: "Auto",
      icon: "🔄",
      description: "Matches system preference",
      gradient: "from-blue-500 to-green-500",
    },
  ] as const;

  const layoutOptions = [
    {
      value: "grid",
      label: "Grid",
      icon: "▦",
      description: "Card-based layout",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      value: "list",
      label: "List",
      icon: "☰",
      description: "Compact list view",
      gradient: "from-green-500 to-blue-500",
    },
    {
      value: "cards",
      label: "Cards",
      icon: "▢",
      description: "Detailed card view",
      gradient: "from-orange-500 to-red-500",
    },
  ] as const;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="space-y-8">
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          className="relative w-20 h-20 bg-gradient-to-br from-green-500 via-blue-600 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/25">
          <Settings className="w-10 h-10 text-white" />
          <div className="absolute inset-0 bg-white/20 rounded-3xl animate-pulse" />
          <Star className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold text-white mb-3">
          Preferences
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white/70 text-lg">
          Customize your experience to match your style
        </motion.p>
      </div>

      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}>
          <label className="flex items-center text-lg font-semibold text-white mb-6">
            <Palette className="w-5 h-5 mr-2 text-yellow-400" />
            Theme Preference <span className="text-red-400 ml-2">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {themeOptions.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                type="button"
                onClick={() => handleChange("theme", option.value)}
                className={`group relative p-6 rounded-3xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  data.theme === option.value
                    ? "border-blue-400 bg-gradient-to-br from-blue-500/20 to-purple-600/20 shadow-lg shadow-blue-500/25"
                    : "border-white/20 bg-white/5 backdrop-blur-sm hover:border-white/40 hover:bg-white/10"
                }`}>
                <div className="text-center">
                  <div
                    className={`text-4xl mb-3 bg-gradient-to-br ${option.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg`}>
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {option.label}
                  </h3>
                  <p className="text-white/60 text-sm">{option.description}</p>
                </div>
                {data.theme === option.value && (
                  <div className="absolute top-3 right-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
          {errors.theme && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-3 flex items-center">
              <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
              {errors.theme}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}>
          <label className="flex items-center text-lg font-semibold text-white mb-6">
            <Layout className="w-5 h-5 mr-2 text-purple-400" />
            Layout Preference <span className="text-red-400 ml-2">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {layoutOptions.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                type="button"
                onClick={() => handleChange("dashboardLayout", option.value)}
                className={`group relative p-6 rounded-3xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  data.dashboardLayout === option.value
                    ? "border-purple-400 bg-gradient-to-br from-purple-500/20 to-pink-600/20 shadow-lg shadow-purple-500/25"
                    : "border-white/20 bg-white/5 backdrop-blur-sm hover:border-white/40 hover:bg-white/10"
                }`}>
                <div className="text-center">
                  <div
                    className={`text-4xl mb-3 bg-gradient-to-br ${option.gradient} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg`}>
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    {option.label}
                  </h3>
                  <p className="text-white/60 text-sm">{option.description}</p>
                </div>{" "}
                {data.dashboardLayout === option.value && (
                  <div className="absolute top-3 right-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
          {errors.dashboardLayout && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-3 flex items-center">
              <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
              {errors.dashboardLayout}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step3;
