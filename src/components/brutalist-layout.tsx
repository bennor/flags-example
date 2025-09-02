import { BetaFeaturesSection } from "./beta-features-section";
import { BrutalistMode } from "./brutalist-mode";
import { FlagStatusDashboard } from "./flag-status-dashboard";

interface BrutalistLayoutProps {
  showBetaFeatures: boolean;
  enableTheming: boolean;
}

export function BrutalistLayout({
  showBetaFeatures,
  enableTheming,
}: BrutalistLayoutProps) {
  return (
    <div className="min-h-screen font-mono bg-white dark:bg-black text-black dark:text-white">
      <div className="p-8">
        <header className="mb-16 border-b-4 border-black dark:border-white pb-8">
          <h1 className="text-6xl font-black uppercase tracking-wider mb-4 text-black dark:text-white">
            Feature Flags Demo
          </h1>
          <h2 className="text-xl font-bold uppercase text-black dark:text-white">
            Demonstrating dynamic feature toggles with the Flags SDK
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <FlagStatusDashboard
            showNewDesign={true}
            showBetaFeatures={showBetaFeatures}
            enableTheming={enableTheming}
            isBrutalist={true}
          />
          <BrutalistMode />
        </div>

        {showBetaFeatures && <BetaFeaturesSection isBrutalist={true} />}
      </div>
    </div>
  );
}
