import { betaFeaturesFlag, darkModeFlag, newDesignFlag } from "../flags";

export default async function Home() {
  const showNewDesign = await newDesignFlag();
  const showBetaFeatures = await betaFeaturesFlag();
  const enableDarkMode = await darkModeFlag();

  if (showNewDesign) {
    return (
      <div
        className={`min-h-screen font-mono ${
          enableDarkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="p-8">
          <header className="mb-16 border-b-4 border-black pb-8">
            <h1
              className={`text-6xl font-black uppercase tracking-wider mb-4 ${
                enableDarkMode ? "text-white" : "text-black"
              }`}
            >
              Feature Flags Demo
            </h1>
            <h2
              className={`text-xl font-bold uppercase ${
                enableDarkMode ? "text-white" : "text-black"
              }`}
            >
              Demonstrating dynamic feature toggles with the Flags SDK
            </h2>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div
              className={`border-4 ${
                enableDarkMode
                  ? "border-white bg-black"
                  : "border-black bg-white"
              } p-6`}
            >
              <h3
                className={`text-2xl font-black uppercase mb-6 ${
                  enableDarkMode ? "text-white" : "text-black"
                }`}
              >
                STATUS
              </h3>
              <div className="space-y-4">
                <div
                  className={`border-2 ${
                    enableDarkMode ? "border-white" : "border-black"
                  } p-4`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold">NEW-DESIGN</span>
                    <span
                      className={`px-3 py-1 font-black ${
                        showNewDesign
                          ? enableDarkMode
                            ? "bg-white text-black"
                            : "bg-black text-white"
                          : enableDarkMode
                          ? "bg-gray-800 text-gray-400"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {showNewDesign ? "ON" : "OFF"}
                    </span>
                  </div>
                </div>
                <div
                  className={`border-2 ${
                    enableDarkMode ? "border-white" : "border-black"
                  } p-4`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold">BETA-FEATURES</span>
                    <span
                      className={`px-3 py-1 font-black ${
                        showBetaFeatures
                          ? enableDarkMode
                            ? "bg-white text-black"
                            : "bg-black text-white"
                          : enableDarkMode
                          ? "bg-gray-800 text-gray-400"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {showBetaFeatures ? "ON" : "OFF"}
                    </span>
                  </div>
                </div>
                <div
                  className={`border-2 ${
                    enableDarkMode ? "border-white" : "border-black"
                  } p-4`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold">DARK-MODE</span>
                    <span
                      className={`px-3 py-1 font-black ${
                        enableDarkMode
                          ? enableDarkMode
                            ? "bg-white text-black"
                            : "bg-black text-white"
                          : enableDarkMode
                          ? "bg-gray-800 text-gray-400"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {enableDarkMode ? "ON" : "OFF"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`border-4 ${
                enableDarkMode
                  ? "border-white bg-black"
                  : "border-black bg-white"
              } p-6`}
            >
              <h3
                className={`text-2xl font-black uppercase mb-6 ${
                  enableDarkMode ? "text-white" : "text-black"
                }`}
              >
                BRUTALIST MODE
              </h3>
              <p
                className={`text-lg font-bold leading-tight ${
                  enableDarkMode ? "text-white" : "text-black"
                }`}
              >
                RAW. FUNCTIONAL. UNCOMPROMISING.
              </p>
              <p
                className={`mt-4 font-bold ${
                  enableDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                NO ROUNDED CORNERS. NO SHADOWS. PURE GEOMETRY.
              </p>
            </div>
          </div>

          {showBetaFeatures && (
            <div
              className={`border-4 ${
                enableDarkMode ? "border-white" : "border-black"
              } p-8 mb-8`}
            >
              <h3
                className={`text-3xl font-black uppercase mb-4 ${
                  enableDarkMode ? "text-white" : "text-black"
                }`}
              >
                BETA ZONE
              </h3>
              <div className="space-y-4">
                <div
                  className={`border-2 ${
                    enableDarkMode ? "border-white" : "border-black"
                  } p-4`}
                >
                  <span className="font-bold">ADVANCED ANALYTICS</span>
                </div>
                <div
                  className={`border-2 ${
                    enableDarkMode ? "border-white" : "border-black"
                  } p-4`}
                >
                  <span className="font-bold">REAL-TIME COLLABORATION</span>
                </div>
                <div
                  className={`border-2 ${
                    enableDarkMode ? "border-white" : "border-black"
                  } p-4`}
                >
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
    <div
      className={`min-h-screen transition-colors duration-300 ${
        enableDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${enableDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            Feature Flags Demo
          </h1>
          <p
            className={`text-lg ${
              enableDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Demonstrating dynamic feature toggles with the Flags SDK
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          <div
            className={`p-6 rounded-xl shadow-lg ${
              enableDarkMode
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <h2 className="text-2xl font-semibold mb-6">
              Flag Status Dashboard
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div
                className={`p-4 rounded-lg ${
                  enableDarkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
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
              <div
                className={`p-4 rounded-lg ${
                  enableDarkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
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
              <div
                className={`p-4 rounded-lg ${
                  enableDarkMode ? "bg-gray-700" : "bg-gray-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">Dark Mode</span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      enableDarkMode
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {enableDarkMode ? "ON" : "OFF"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {showNewDesign && (
            <div className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">
                🎨 New Design Experience
              </h3>
              <p>
                This section only appears when the new design flag is enabled.
                It showcases an enhanced UI with gradient backgrounds and modern
                styling.
              </p>
            </div>
          )}

          {showBetaFeatures && (
            <div
              className={`p-6 rounded-xl shadow-lg border-2 border-dashed ${
                enableDarkMode
                  ? "border-yellow-400 bg-yellow-900/20"
                  : "border-yellow-400 bg-yellow-50"
              }`}
            >
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
