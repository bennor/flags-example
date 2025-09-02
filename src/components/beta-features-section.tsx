interface BetaFeaturesSectionProps {
  isBrutalist?: boolean;
}

export function BetaFeaturesSection({
  isBrutalist = false,
}: BetaFeaturesSectionProps) {
  if (isBrutalist) {
    return (
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
    );
  }

  return (
    <div className="p-6 rounded-xl shadow-lg border-2 border-dashed border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20">
      <h3 className="text-xl font-bold mb-2 text-yellow-600">
        🚀 Beta Features Unlocked
      </h3>
      <div className="space-y-3">
        <p>
          Beta features are active! Here are some experimental capabilities:
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Advanced analytics dashboard</li>
          <li>Real-time collaboration tools</li>
          <li>AI-powered recommendations</li>
        </ul>
      </div>
    </div>
  );
}
