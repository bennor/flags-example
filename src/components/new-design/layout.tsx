import type { FlagStatus } from "../../types/flags";
import { BrutalistMode } from "../brutalist-mode";
import { BetaFeaturesSection } from "./beta-features-section";
import { FlagStatusDashboard } from "./flag-status-dashboard";

export function NewDesignLayout({
  showBetaFeatures,
  enableTheming,
}: Pick<FlagStatus, "showBetaFeatures" | "enableTheming">) {
  const flags: FlagStatus = {
    showNewDesign: true,
    showBetaFeatures,
    enableTheming,
  };

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
          <FlagStatusDashboard {...flags} />
          <BrutalistMode />
        </div>

        {showBetaFeatures && <BetaFeaturesSection />}
      </div>
    </div>
  );
}
