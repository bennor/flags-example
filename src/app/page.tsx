import { ThemeProvider } from "../components/theme-provider";
import { ThemeToggle } from "../components/theme-toggle";
import { betaFeaturesFlag, newDesignFlag, themingFlag } from "../flags";

function PageContent({
  showNewDesign,
  showBetaFeatures,
  enableTheming,
}: {
  showNewDesign: boolean;
  showBetaFeatures: boolean;
  enableTheming: boolean;
}) {
  if (showNewDesign) {
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
                    <span className={`px-3 py-1 font-black ${
                      showBetaFeatures
                        ? "bg-black dark:bg-white text-white dark:text-black"
                        : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}>
                      {showBetaFeatures ? "ON" : "OFF"}
                    </span>
                  </div>
                </div>
                <div className="border-2 border-black dark:border-white p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">THEMING</span>
                    <span className={`px-3 py-1 font-black ${
                      enableTheming
                        ? "bg-black dark:bg-white text-white dark:text-black"
                        : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}>
                      {enableTheming ? "ON" : "OFF"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-6">
              <h3 className="text-2xl font-black uppercase mb-6 text-black dark:text-white">
                BRUTALIST MODE
              </h3>
              <p className="text-lg font-bold leading-tight text-black dark:text-white">
                RAW. FUNCTIONAL. UNCOMPROMISING.
              </p>
              <p className="mt-4 font-bold text-gray-700 dark:text-gray-300">
                NO ROUNDED CORNERS. NO SHADOWS. PURE GEOMETRY.
              </p>
            </div>
          </div>

          {showBetaFeatures && (
            <div className="border-4 border-black dark:border-white p-8 mb-8">
              <h3 className="text-3xl font-black uppercase mb-4 text-black dark:text-white">
                BETA ZONE
              </h3>
              <div className="space-y-4">
                <div className="border-2 border-black dark:border-white p-4">
                  <span className="font-bold">ADVANCED ANALYTICS</span>
                </div>
                <div className="border-2 border-black dark:border-white p-4">
                  <span className="font-bold">REAL-TIME COLLABORATION</span>
                </div>
                <div className="border-2 border-black dark:border-white p-4">
                  <span className="font-bold">AI RECOMMENDATIONS</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

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
          <div className="p-6 rounded-xl shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-6">
              Flag Status Dashboard
            </h2>
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

          {showBetaFeatures && (
            <div className="p-6 rounded-xl shadow-lg border-2 border-dashed border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20">
              <h3 className="text-xl font-bold mb-2 text-yellow-600">
                🚀 Beta Features Unlocked
              </h3>
              <div className="space-y-3">
                <p>
                  Beta features are active! Here are some experimental
                  capabilities:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Advanced analytics dashboard</li>
                  <li>Real-time collaboration tools</li>
                  <li>AI-powered recommendations</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default async function Home() {
  const showNewDesign = await newDesignFlag();
  const showBetaFeatures = await betaFeaturesFlag();
  const enableTheming = await themingFlag();

  return (
    <ThemeProvider enabled={enableTheming}>
      <PageContent
        showNewDesign={showNewDesign}
        showBetaFeatures={showBetaFeatures}
        enableTheming={enableTheming}
      />
      {enableTheming && <ThemeToggle showNewDesign={showNewDesign} />}
    </ThemeProvider>
  );
}
