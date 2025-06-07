// Re-export types from onboarding for consistency
export type {
  PersonalInfo,
  BusinessInfo,
  Preferences,
  OnboardingData as UserData,
} from "./onboarding";

export interface DashboardStats {
  teamMembers: number;
  activeProjects: number;
  notifications: number;
}

// Weekly progress data for charts
export interface WeeklyProgress {
  day: string;
  value: number;
}
