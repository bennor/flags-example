export const FLAG_KEYS = {
  NEW_DESIGN: "new-design",
  BETA_FEATURES: "beta-features",
  THEMING: "theming",
} as const;

export const FLAG_LABELS = {
  NEW_DESIGN: "New Design",
  BETA_FEATURES: "Beta Features",
  THEMING: "Theming",
  NEW_DESIGN_UPPER: "NEW-DESIGN",
  BETA_FEATURES_UPPER: "BETA-FEATURES",
  THEMING_UPPER: "THEMING",
} as const;

export const UI_TEXT = {
  APP_TITLE: "Feature Flags Demo!",
  APP_SUBTITLE: "Demonstrating dynamic feature toggles with the Flags SDK",
  FLAG_STATUS_DASHBOARD: "Flag Status Dashboard",
  STATUS: "STATUS",
  BRUTALIST_MODE: "BRUTALIST MODE",
  BRUTALIST_TAGLINE: "RAW. FUNCTIONAL. UNCOMPROMISING.",
  BRUTALIST_DESCRIPTION: "NO ROUNDED CORNERS. NO SHADOWS. PURE GEOMETRY.",
  NEW_DESIGN_TITLE: "🎨 New Design Experience",
  NEW_DESIGN_DESCRIPTION:
    "This section only appears when the new design flag is enabled. It showcases an enhanced UI with gradient backgrounds and modern styling.",
  BETA_ZONE: "BETA ZONE",
  BETA_FEATURES_TITLE: "🚀 Beta Features Unlocked",
  BETA_FEATURES_DESCRIPTION:
    "Beta features are active! Here are some experimental capabilities:",
  BETA_FEATURES_LIST: [
    "Advanced analytics dashboard",
    "Real-time collaboration tools",
    "AI-powered recommendations",
  ],
  FLAG_STATUS: {
    ON: "ON",
    OFF: "OFF",
  },
  THEME_LABELS: {
    SYSTEM: "System",
    LIGHT: "Light",
    DARK: "Dark",
  },
} as const;
