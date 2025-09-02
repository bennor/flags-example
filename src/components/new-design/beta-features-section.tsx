import { UI_TEXT } from "../../constants/strings";

export function BetaFeaturesSection() {
  return (
    <div className="border-4 border-black dark:border-white p-8 mb-8">
      <h3 className="text-3xl font-black uppercase mb-4 text-black dark:text-white">
        {UI_TEXT.BETA_ZONE}
      </h3>
      <div className="space-y-4">
        {UI_TEXT.BETA_FEATURES_LIST.map((feature) => (
          <div
            key={feature}
            className="border-2 border-black dark:border-white p-4"
          >
            <span className="font-bold">{feature.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
