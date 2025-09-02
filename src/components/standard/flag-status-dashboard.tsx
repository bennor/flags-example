import { FLAG_LABELS, UI_TEXT } from "../../constants/strings";
import type { FlagStatus } from "../../types/flags";
import { getFlagStatusStyle } from "./utils";

export function FlagStatusDashboard(flags: FlagStatus) {
  return (
    <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold mb-6">
        {UI_TEXT.FLAG_STATUS_DASHBOARD}
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">{FLAG_LABELS.NEW_DESIGN}</span>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${getFlagStatusStyle(flags.showNewDesign)}`}
            >
              {flags.showNewDesign
                ? UI_TEXT.FLAG_STATUS.ON
                : UI_TEXT.FLAG_STATUS.OFF}
            </span>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">{FLAG_LABELS.BETA_FEATURES}</span>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${getFlagStatusStyle(flags.showBetaFeatures)}`}
            >
              {flags.showBetaFeatures
                ? UI_TEXT.FLAG_STATUS.ON
                : UI_TEXT.FLAG_STATUS.OFF}
            </span>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">{FLAG_LABELS.THEMING}</span>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${getFlagStatusStyle(flags.enableTheming)}`}
            >
              {flags.enableTheming
                ? UI_TEXT.FLAG_STATUS.ON
                : UI_TEXT.FLAG_STATUS.OFF}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
