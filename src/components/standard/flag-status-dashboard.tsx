import type { FlagStatus } from "../../types/flags";
import { getFlagStatusStyle } from "./utils";

export function FlagStatusDashboard(flags: FlagStatus) {
  return (
    <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold mb-6">Flag Status Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">New Design</span>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${getFlagStatusStyle(flags.showNewDesign)}`}
            >
              {flags.showNewDesign ? "ON" : "OFF"}
            </span>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">Beta Features</span>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${getFlagStatusStyle(flags.showBetaFeatures)}`}
            >
              {flags.showBetaFeatures ? "ON" : "OFF"}
            </span>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">Theming</span>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${getFlagStatusStyle(flags.enableTheming)}`}
            >
              {flags.enableTheming ? "ON" : "OFF"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
