export interface ProfileTypography {
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
}

export interface ProfileColors {
  foreground: string;
  background: string;
}

export interface ProfilePreferences {
  typography: ProfileTypography;
  colors: ProfileColors;
}

export interface AccessibilityThresholds {
  wcagRatio: number;
  wcagLevel: "AAA" | "AA" | "FAIL";
  apcaLc: number;
  isColorblindSafe: boolean;
}

export interface ProfileMetadata {
  createdAt: string;
  updatedAt: string;
}

export interface ProfileResponse {
  profileId: string;
  nickname: string;
  preferences: ProfilePreferences;
  accessibility_thresholds: AccessibilityThresholds;
  metadata: ProfileMetadata & { publicUrl: string };
}

export interface ProfileDocument {
  profileId: string;
  nickname: string;
  preferences: ProfilePreferences;
  accessibilityThresholds: AccessibilityThresholds;
  metadata: {
    createdAt: Date; // FirebaseFirestore.Timestamp
    updatedAt: Date; // FirebaseFirestore.Timestamp
  };
}

export interface CreateProfileInput {
  nickname: string;
  preferences: ProfilePreferences;
}

export interface UpdateProfileInput {
  nickname?: string;
  preferences?: ProfilePreferences;
}
