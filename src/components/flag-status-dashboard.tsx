interface FlagStatusDashboardProps {
  showNewDesign: boolean;
  showBetaFeatures: boolean;
  enableTheming: boolean;
  isBrutalist?: boolean;
}

export function FlagStatusDashboard({
  showNewDesign,
  showBetaFeatures,
  enableTheming,
  isBrutalist = false,
}: FlagStatusDashboardProps) {
  if (isBrutalist) {
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
                ON
              </span>
            </div>
          </div>
          <div className="border-2 border-black dark:border-white p-4">
            <div className="flex justify-between items-center">
              <span className="font-bold">BETA-FEATURES</span>
              <span
                className={`px-3 py-1 font-black ${
                  showBetaFeatures
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                }`}
              >
                {showBetaFeatures ? "ON" : "OFF"}
              </span>
            </div>
          </div>
          <div className="border-2 border-black dark:border-white p-4">
            <div className="flex justify-between items-center">
              <span className="font-bold">THEMING</span>
              <span
                className={`px-3 py-1 font-black ${
                  enableTheming
                    ? "bg-black dark:bg-white text-white dark:text-black"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                }`}
              >
                {enableTheming ? "ON" : "OFF"}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-semibold mb-6">Flag Status Dashboard</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">New Design</span>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${
                showNewDesign
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {showNewDesign ? "ON" : "OFF"}
            </span>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">Beta Features</span>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${
                showBetaFeatures
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {showBetaFeatures ? "ON" : "OFF"}
            </span>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
          <div className="flex items-center justify-between">
            <span className="font-medium">Theming</span>
            <span
              className={`px-2 py-1 rounded text-xs font-semibold ${
                enableTheming
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {enableTheming ? "ON" : "OFF"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
