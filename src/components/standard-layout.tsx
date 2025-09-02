import { BetaFeaturesSection } from "./beta-features-section";
import { FlagStatusDashboard } from "./flag-status-dashboard";
import { NewDesignSection } from "./new-design-section";

interface StandardLayoutProps {
  showNewDesign: boolean;
  showBetaFeatures: boolean;
  enableTheming: boolean;
}

export function StandardLayout({
  showNewDesign,
  showBetaFeatures,
  enableTheming,
}: StandardLayoutProps) {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-700 dark:text-gray-300">
            Feature Flags Demo
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Demonstrating dynamic feature toggles with the Flags SDK
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          <FlagStatusDashboard
            showNewDesign={showNewDesign}
            showBetaFeatures={showBetaFeatures}
            enableTheming={enableTheming}
          />

          {showNewDesign && <NewDesignSection />}

          {showBetaFeatures && <BetaFeaturesSection />}
        </div>
      </div>
    </div>
  );
}
