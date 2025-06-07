import React from "react";
import { motion } from "framer-motion";
import { User, Mail, Sparkles } from "lucide-react";
import type { PersonalInfo } from "../../types/onboarding";

interface Step1Props {
  data: PersonalInfo;
  onUpdate: (data: PersonalInfo) => void;
  errors: Partial<Record<keyof PersonalInfo, string>>;
}

const Step1: React.FC<Step1Props> = ({ data, onUpdate, errors }) => {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onUpdate({ ...data, [field]: value });
  };

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
          className="relative w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/25">
          <User className="w-10 h-10 text-white" />
          <div className="absolute inset-0 bg-white/20 rounded-3xl animate-pulse" />
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold text-white mb-3">
          Personal Information
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white/70 text-lg">
          Let's start with some basic information about you
        </motion.p>
      </div>

      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="group">
          {" "}
          <label className="flex items-center text-sm font-semibold text-white mb-3">
            <User className="w-4 h-4 mr-2 text-blue-400" />
            Full Name <span className="text-red-400 ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={data.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl focus:ring-4 focus:ring-blue-400/50 focus:border-blue-400 transition-all duration-300 text-white placeholder-white/50 text-lg hover:bg-white/15 hover:border-white/40 ${
                errors.name
                  ? "border-red-400 bg-red-500/10"
                  : "border-white/20 group-hover:border-blue-400/50"
              }`}
              placeholder="Enter your full name"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2 flex items-center">
              <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
              {errors.name}
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="group">
          {" "}
          <label className="flex items-center text-sm font-semibold text-white mb-3">
            <Mail className="w-4 h-4 mr-2 text-purple-400" />
            Email Address <span className="text-red-400 ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl focus:ring-4 focus:ring-purple-400/50 focus:border-purple-400 transition-all duration-300 text-white placeholder-white/50 text-lg hover:bg-white/15 hover:border-white/40 ${
                errors.email
                  ? "border-red-400 bg-red-500/10"
                  : "border-white/20 group-hover:border-purple-400/50"
              }`}
              placeholder="Enter your email address"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2 flex items-center">
              <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
              {errors.email}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step1;
