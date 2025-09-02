import { UI_TEXT } from "../../constants/strings";

export function BetaFeaturesSection() {
  return (
    <div className="p-6 rounded-xl shadow-lg border-2 border-dashed border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20">
      <h3 className="text-xl font-bold mb-2 text-yellow-600">
        {UI_TEXT.BETA_FEATURES_TITLE}
      </h3>
      <div className="space-y-3">
        <p>{UI_TEXT.BETA_FEATURES_DESCRIPTION}</p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          {UI_TEXT.BETA_FEATURES_LIST.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
