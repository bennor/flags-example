import { UI_TEXT } from "../../constants/strings";
import type { FlagStatus } from "../../types/flags";
import { BetaFeaturesSection } from "./beta-features-section";
import { BrutalistMode } from "./brutalist-mode";
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
            {UI_TEXT.APP_TITLE}
          </h1>
          <h2 className="text-xl font-bold uppercase text-black dark:text-white">
            {UI_TEXT.APP_SUBTITLE}
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
