import type { FlagStatus } from "../../types/flags";
import { getFlagStatusStyle } from "./utils";

export function FlagStatusDashboard(flags: FlagStatus) {
  return (
    <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-6">
      <h3 className="text-2xl font-black uppercase mb-6 text-black dark:text-white">
        STATUS
      </h3>
      <div className="space-y-4">
        <div className="border-2 border-black dark:border-white p-4">
          <div className="flex justify-between items-center">
            <span className="font-bold">NEW-DESIGN</span>
            <span className="px-3 py-1 font-black bg-black dark:bg-white text-white dark:text-black">
              {flags.showNewDesign ? "ON" : "OFF"}
            </span>
          </div>
        </div>
        <div className="border-2 border-black dark:border-white p-4">
          <div className="flex justify-between items-center">
            <span className="font-bold">BETA-FEATURES</span>
            <span
              className={`px-3 py-1 font-black ${getFlagStatusStyle(flags.showBetaFeatures)}`}
            >
              {flags.showBetaFeatures ? "ON" : "OFF"}
            </span>
          </div>
        </div>
        <div className="border-2 border-black dark:border-white p-4">
          <div className="flex justify-between items-center">
            <span className="font-bold">THEMING</span>
            <span
              className={`px-3 py-1 font-black ${getFlagStatusStyle(flags.enableTheming)}`}
            >
              {flags.enableTheming ? "ON" : "OFF"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
