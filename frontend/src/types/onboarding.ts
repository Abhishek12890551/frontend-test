export interface PersonalInfo {
  name: string;
  email: string;
}

export interface BusinessInfo {
  companyName: string;
  industry: string;
  companySize: string;
}

export interface Preferences {
  theme: "light" | "dark" | "auto";
  dashboardLayout: "grid" | "list" | "cards";
}

export interface OnboardingData {
  personalInfo: PersonalInfo;
  businessInfo: BusinessInfo;
  preferences: Preferences;
  onboardingCompleted: boolean;
}

export const INDUSTRY_OPTIONS = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Manufacturing",
  "Consulting",
  "Marketing",
  "Real Estate",
  "Other",
];

export const COMPANY_SIZE_OPTIONS = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-1000 employees",
  "1000+ employees",
];
