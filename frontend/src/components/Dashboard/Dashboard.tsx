import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Users,
  TrendingUp,
  Bell,
  Settings,
  Search,
  Plus,
  Calendar,
  Award,
  Filter,
  Download,
  ChevronRight,
  Target,
  Briefcase,
  Sparkles,
  TrendingDown,
  Coffee,
  MessageCircle,
  Video,
  FileText,
  DollarSign,
  Home,
} from "lucide-react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
} from "recharts";
import type { OnboardingData } from "../../types/onboarding";

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<OnboardingData | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  const dashboardStats = {
    teamMembers: userData?.businessInfo?.companySize?.includes("1-10")
      ? 8
      : userData?.businessInfo?.companySize?.includes("11-50")
      ? 32
      : userData?.businessInfo?.companySize?.includes("51-200")
      ? 120
      : 156,
    activeProjects: 12,
    notifications: 5,
    revenue: 45200,
    growth: 23.5,
    completed: 89,
  };

  const projectData = [
    { name: "Development", value: 45, color: "#3B82F6" },
    { name: "Design", value: 25, color: "#8B5CF6" },
    { name: "Marketing", value: 20, color: "#10B981" },
    { name: "Planning", value: 10, color: "#F59E0B" },
  ];

  const revenueData = [
    { month: "Jan", value: 35000 },
    { month: "Feb", value: 38000 },
    { month: "Mar", value: 42000 },
    { month: "Apr", value: 39000 },
    { month: "May", value: 45000 },
    { month: "Jun", value: 48000 },
  ];

  const performanceData = [
    { name: "Completion Rate", value: 89, color: "#3B82F6" },
  ];
  useEffect(() => {
    const storedData = localStorage.getItem("onboarding_user_data");
    if (storedData) {
      const data = JSON.parse(storedData) as OnboardingData;
      setUserData(data);
    }
  }, []);

  const StatCard = ({
    icon,
    title,
    value,
    change,
    trend,
    delay = 0,
  }: {
    icon: React.ReactNode;
    title: string;
    value: string | number;
    change?: string;
    trend?: "up" | "down";
    delay?: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
          {change && (
            <div
              className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium ${
                trend === "up"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}>
              {trend === "up" ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span>{change}</span>
            </div>
          )}
        </div>
        <h3 className="text-white/70 text-sm font-medium mb-2">{title}</h3>
        <p className="text-3xl font-bold text-white">{value}</p>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
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

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="fixed left-0 top-0 h-full w-20 bg-black/20 backdrop-blur-xl border-r border-white/10 z-50">
        <div className="flex flex-col items-center py-8 space-y-6">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>

          <nav className="flex flex-col space-y-4">
            {[
              { icon: Home, id: "overview" },
              { icon: BarChart3, id: "analytics" },
              { icon: Users, id: "team" },
              { icon: Briefcase, id: "projects" },
              { icon: Settings, id: "settings" },
            ].map(({ icon: Icon, id }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`p-3 rounded-2xl transition-all duration-300 ${
                  activeTab === id
                    ? "bg-gradient-to-br from-blue-500/30 to-purple-600/30 text-white border border-white/20"
                    : "text-white/60 hover:text-white hover:bg-white/10"
                }`}>
                <Icon className="w-5 h-5" />
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="ml-20 relative min-h-screen">
        <header className="sticky top-0 z-40 bg-black/20 backdrop-blur-xl border-b border-white/10">
          <div className="flex items-center justify-between px-8 py-6">
            <div>
              <h1 className="text-2xl font-bold text-white">
                Good{" "}
                {new Date().getHours() < 12
                  ? "morning"
                  : new Date().getHours() < 18
                  ? "afternoon"
                  : "evening"}
                , {userData?.personalInfo?.name || "User"}! 👋
              </h1>
              <p className="text-white/60 mt-1">
                Here's what's happening with your business today
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="w-80 pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-white placeholder-white/50"
                />
              </div>

              <button className="relative p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <Bell className="w-5 h-5 text-white" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              </button>

              <button className="flex items-center space-x-3 p-2 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                  {userData?.personalInfo?.name?.charAt(0).toUpperCase() || "U"}
                </div>
                <div className="text-left hidden lg:block">
                  <p className="text-white text-sm font-medium">
                    {userData?.personalInfo?.name || "User"}
                  </p>
                  <p className="text-white/60 text-xs">
                    {userData?.personalInfo?.email || "user@example.com"}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-white/60" />
              </button>
            </div>
          </div>
        </header>

        <main className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              icon={<DollarSign className="w-6 h-6 text-blue-400" />}
              title="Total Revenue"
              value={`$${dashboardStats.revenue.toLocaleString()}`}
              change={`+${dashboardStats.growth}%`}
              trend="up"
              delay={0}
            />
            <StatCard
              icon={<Users className="w-6 h-6 text-purple-400" />}
              title="Team Members"
              value={dashboardStats.teamMembers}
              change="+3 this month"
              trend="up"
              delay={0.1}
            />
            <StatCard
              icon={<Briefcase className="w-6 h-6 text-green-400" />}
              title="Active Projects"
              value={dashboardStats.activeProjects}
              change="+2 this week"
              trend="up"
              delay={0.2}
            />
            <StatCard
              icon={<Target className="w-6 h-6 text-yellow-400" />}
              title="Completion Rate"
              value={`${dashboardStats.completed}%`}
              change="+5.2%"
              trend="up"
              delay={0.3}
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="xl:col-span-2 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Revenue Trend
                  </h3>
                  <p className="text-white/60 text-sm">
                    Monthly revenue over time
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                    <Filter className="w-4 h-4 text-white/60" />
                  </button>
                  <button className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                    <Download className="w-4 h-4 text-white/60" />
                  </button>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient
                        id="colorRevenue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1">
                        <stop
                          offset="5%"
                          stopColor="#3B82F6"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="#8B5CF6"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,0.1)"
                    />
                    <XAxis
                      dataKey="month"
                      stroke="rgba(255,255,255,0.6)"
                      fontSize={12}
                    />
                    <YAxis stroke="rgba(255,255,255,0.6)" fontSize={12} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0,0,0,0.8)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "16px",
                        backdropFilter: "blur(12px)",
                        color: "white",
                      }}
                      formatter={(value) => [
                        `$${value.toLocaleString()}`,
                        "Revenue",
                      ]}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      fill="url(#colorRevenue)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">
                  Project Distribution
                </h3>
                <p className="text-white/60 text-sm">
                  Current project allocation
                </p>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={projectData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value">
                      {projectData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(0,0,0,0.8)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "16px",
                        backdropFilter: "blur(12px)",
                        color: "white",
                      }}
                    />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-2">
                {projectData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-white/70 text-sm">{item.name}</span>
                    </div>
                    <span className="text-white font-medium">
                      {item.value}%
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Performance & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Team Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">
                  Team Performance
                </h3>
                <p className="text-white/60 text-sm">
                  Current completion metrics
                </p>
              </div>{" "}
              <div className="h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="90%"
                    data={performanceData}>
                    <RadialBar
                      label={{ position: "insideStart", fill: "#fff" }}
                      background
                      dataKey="value"
                      fill="#3B82F6"
                    />
                  </RadialBarChart>
                </ResponsiveContainer>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-center">
                    <span className="text-2xl font-bold text-white">
                      {performanceData[0].value}%
                    </span>
                    <p className="text-white/60 text-sm">Complete</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">Quick Actions</h3>
                <p className="text-white/60 text-sm">Frequently used actions</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Plus,
                    label: "New Project",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: Users,
                    label: "Invite Team",
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    icon: FileText,
                    label: "Create Report",
                    color: "from-green-500 to-green-600",
                  },
                  {
                    icon: Video,
                    label: "Start Meeting",
                    color: "from-yellow-500 to-yellow-600",
                  },
                ].map((action, index) => (
                  <button
                    key={index}
                    className={`group p-4 bg-gradient-to-br ${action.color} rounded-2xl hover:scale-105 transition-all duration-300 text-white`}>
                    <action.icon className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-sm font-medium">{action.label}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white">
                  Recent Activity
                </h3>
                <p className="text-white/60 text-sm">
                  Latest updates from your team
                </p>
              </div>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                View all
              </button>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: MessageCircle,
                  text: "New comment on Project Alpha",
                  time: "2 min ago",
                  color: "text-blue-400",
                },
                {
                  icon: Award,
                  text: "Task completed by Sarah Johnson",
                  time: "15 min ago",
                  color: "text-green-400",
                },
                {
                  icon: Calendar,
                  text: "Meeting scheduled for tomorrow",
                  time: "1 hour ago",
                  color: "text-purple-400",
                },
                {
                  icon: Coffee,
                  text: "Team standup in 30 minutes",
                  time: "2 hours ago",
                  color: "text-yellow-400",
                },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-white/5 transition-all duration-300">
                  <div
                    className={`p-2 bg-white/10 rounded-xl ${activity.color}`}>
                    <activity.icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{activity.text}</p>
                    <p className="text-white/60 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
