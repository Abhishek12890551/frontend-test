import Preferences from "../models/preferencesModel.js";

export const getPreferences = async (req, res) => {
  try {
    let preferences = await Preferences.findOne({ userId: req.userId });

    if (!preferences) {
      preferences = new Preferences({
        userId: req.userId,
        theme: "light",
        dashboardLayout: {
          sidebarCollapsed: false,
          gridSize: "medium",
          widgets: [],
        },
        notifications: {
          email: true,
          push: true,
          desktop: false,
        },
      });
      await preferences.save();
    }

    res.status(200).json({
      success: true,
      data: preferences,
    });
  } catch (error) {
    console.error("Error fetching preferences:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const savePreferences = async (req, res) => {
  try {
    const { theme, dashboardLayout, notifications } = req.validatedBody;

    let preferences = await Preferences.findOne({ userId: req.userId });

    if (preferences) {
      if (theme !== undefined) preferences.theme = theme;
      if (dashboardLayout !== undefined) {
        preferences.dashboardLayout = {
          ...preferences.dashboardLayout.toObject(),
          ...dashboardLayout,
        };
      }
      if (notifications !== undefined) {
        preferences.notifications = {
          ...preferences.notifications.toObject(),
          ...notifications,
        };
      }
      await preferences.save();
    } else {
      preferences = new Preferences({
        userId: req.userId,
        theme: theme || "light",
        dashboardLayout: dashboardLayout || {
          sidebarCollapsed: false,
          gridSize: "medium",
          widgets: [],
        },
        notifications: notifications || {
          email: true,
          push: true,
          desktop: false,
        },
      });
      await preferences.save();
    }

    res.status(200).json({
      success: true,
      message: "Preferences saved successfully",
      data: preferences,
    });
  } catch (error) {
    console.error("Error saving preferences:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getDashboardSummary = async (req, res) => {
  try {
    const summary = {
      user: {
        id: req.userId,
        name: req.user.name,
        email: req.user.email,
        joinedDate: req.user.createdAt || new Date(),
      },
      teams: [
        {
          id: "team-1",
          name: "Development Team",
          members: 8,
          role: "Frontend Developer",
          status: "active",
        },
        {
          id: "team-2",
          name: "Design Team",
          members: 5,
          role: "Collaborator",
          status: "active",
        },
        {
          id: "team-3",
          name: "QA Team",
          members: 3,
          role: "Tester",
          status: "inactive",
        },
      ],
      projects: [
        {
          id: "proj-1",
          name: "E-commerce Platform",
          progress: 75,
          status: "in-progress",
          dueDate: "2025-07-15",
          priority: "high",
          tasksCompleted: 45,
          totalTasks: 60,
        },
        {
          id: "proj-2",
          name: "Mobile App Redesign",
          progress: 30,
          status: "in-progress",
          dueDate: "2025-08-20",
          priority: "medium",
          tasksCompleted: 12,
          totalTasks: 40,
        },
        {
          id: "proj-3",
          name: "API Documentation",
          progress: 100,
          status: "completed",
          dueDate: "2025-05-30",
          priority: "low",
          tasksCompleted: 25,
          totalTasks: 25,
        },
      ],
      notifications: [
        {
          id: "notif-1",
          type: "task",
          title: "New task assigned",
          message: "You have been assigned to 'Update user authentication'",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          read: false,
          priority: "medium",
        },
        {
          id: "notif-2",
          type: "project",
          title: "Project deadline approaching",
          message: "E-commerce Platform is due in 5 days",
          timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
          read: false,
          priority: "high",
        },
        {
          id: "notif-3",
          type: "team",
          title: "Team meeting scheduled",
          message: "Daily standup meeting at 10:00 AM tomorrow",
          timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          read: true,
          priority: "low",
        },
        {
          id: "notif-4",
          type: "system",
          title: "System maintenance",
          message: "Scheduled maintenance on Sunday 2:00 AM - 4:00 AM",
          timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          read: true,
          priority: "medium",
        },
      ],
      stats: {
        totalProjects: 15,
        activeProjects: 8,
        completedProjects: 7,
        totalTasks: 342,
        completedTasks: 189,
        pendingTasks: 153,
        teamMembers: 24,
        unreadNotifications: 2,
      },
      recentActivity: [
        {
          id: "activity-1",
          type: "task_completed",
          description: "Completed 'User interface mockups'",
          timestamp: new Date(Date.now() - 30 * 60 * 1000),
          project: "Mobile App Redesign",
        },
        {
          id: "activity-2",
          type: "comment_added",
          description: "Added comment to 'Database optimization' task",
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
          project: "E-commerce Platform",
        },
        {
          id: "activity-3",
          type: "file_uploaded",
          description: "Uploaded design assets for review",
          timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
          project: "Mobile App Redesign",
        },
      ],
    };

    res.status(200).json({
      success: true,
      data: summary,
    });
  } catch (error) {
    console.error("Error fetching dashboard summary:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
