import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Briefcase,
  Building,
  Target,
} from "lucide-react";
import type { BusinessInfo } from "../../types/onboarding";
import { INDUSTRY_OPTIONS, COMPANY_SIZE_OPTIONS } from "../../types/onboarding";

interface Step2Props {
  data: BusinessInfo;
  onUpdate: (data: BusinessInfo) => void;
  errors: Partial<Record<keyof BusinessInfo, string>>;
}

const Step2: React.FC<Step2Props> = ({ data, onUpdate, errors }) => {
  const handleChange = (field: keyof BusinessInfo, value: string) => {
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
          className="relative w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-600 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-500/25">
          <Building2 className="w-10 h-10 text-white" />
          <div className="absolute inset-0 bg-white/20 rounded-3xl animate-pulse" />
          <Target className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl font-bold text-white mb-3">
          Business Information
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-white/70 text-lg">
          Tell us about your organization and goals
        </motion.p>
      </div>

      <div className="space-y-6">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="group">
          <label className="flex items-center text-sm font-semibold text-white mb-3">
            <Building className="w-4 h-4 mr-2 text-purple-400" />
            Company Name <span className="text-red-400 ml-1">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              value={data.companyName}
              onChange={(e) => handleChange("companyName", e.target.value)}
              className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl focus:ring-4 focus:ring-purple-400/50 focus:border-purple-400 transition-all duration-300 text-white placeholder-white/50 text-lg hover:bg-white/15 ${
                errors.companyName
                  ? "border-red-400 bg-red-500/10"
                  : "border-white/20 hover:border-white/40 group-hover:border-purple-400/50"
              }`}
              placeholder="Enter your company name"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
          {errors.companyName && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2 flex items-center">
              <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
              {errors.companyName}
            </motion.p>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="group">
          <label className="flex items-center text-sm font-semibold text-white mb-3">
            <Briefcase className="w-4 h-4 mr-2 text-blue-400" />
            Industry <span className="text-red-400 ml-1">*</span>
          </label>
          <div className="relative">
            <select
              value={data.industry}
              onChange={(e) => handleChange("industry", e.target.value)}
              className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl focus:ring-4 focus:ring-blue-400/50 focus:border-blue-400 transition-all duration-300 text-white text-lg ${
                errors.industry
                  ? "border-red-400 bg-red-500/10"
                  : "border-white/20 hover:border-white/40 group-hover:border-blue-400/50"
              }`}>
              <option value="" className="bg-gray-800 text-white">
                Select your industry
              </option>
              {INDUSTRY_OPTIONS.map((industry) => (
                <option
                  key={industry}
                  value={industry}
                  className="bg-gray-800 text-white">
                  {industry}
                </option>
              ))}
            </select>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
          {errors.industry && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2 flex items-center">
              <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
              {errors.industry}
            </motion.p>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="group">
          <label className="flex items-center text-sm font-semibold text-white mb-3">
            <Users className="w-4 h-4 mr-2 text-green-400" />
            Company Size <span className="text-red-400 ml-1">*</span>
          </label>
          <div className="relative">
            <select
              value={data.companySize}
              onChange={(e) => handleChange("companySize", e.target.value)}
              className={`w-full px-6 py-4 bg-white/10 backdrop-blur-sm border-2 rounded-2xl focus:ring-4 focus:ring-green-400/50 focus:border-green-400 transition-all duration-300 text-white text-lg ${
                errors.companySize
                  ? "border-red-400 bg-red-500/10"
                  : "border-white/20 hover:border-white/40 group-hover:border-green-400/50"
              }`}>
              <option value="" className="bg-gray-800 text-white">
                Select company size
              </option>
              {COMPANY_SIZE_OPTIONS.map((size) => (
                <option
                  key={size}
                  value={size}
                  className="bg-gray-800 text-white">
                  {size}
                </option>
              ))}
            </select>
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
          {errors.companySize && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm mt-2 flex items-center">
              <span className="w-1 h-1 bg-red-400 rounded-full mr-2"></span>
              {errors.companySize}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Step2;
