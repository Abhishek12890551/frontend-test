import type { UserData } from "../types";

const STORAGE_KEY = "onboarding_user_data";

export const saveUserData = (userData: UserData): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error("Failed to save user data:", error);
  }
};

export const getUserData = (): UserData | null => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Failed to get user data:", error);
    return null;
  }
};

export const clearUserData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear user data:", error);
  }
};

export const isOnboardingCompleted = (): boolean => {
  const userData = getUserData();
  return userData?.onboardingCompleted || false;
};

export const completeOnboarding = (userData: UserData): void => {
  const updatedData = {
    ...userData,
    onboardingCompleted: true,
    completedAt: new Date().toISOString(),
  };
  saveUserData(updatedData);
};
