import { encryptFlagValues, type FlagValuesType } from "flags";
import { FlagValues } from "flags/react";
import { Suspense } from "react";
import { BrutalistLayout } from "../components/brutalist-layout";
import { StandardLayout } from "../components/standard-layout";
import { ThemeProvider } from "../components/theme-provider";
import { ThemeToggle } from "../components/theme-toggle";
import { betaFeaturesFlag, newDesignFlag, themingFlag } from "../flags";

async function ConfidentialFlagValues({ values }: { values: FlagValuesType }) {
  const encryptedFlagValues = await encryptFlagValues(values);
  return <FlagValues values={encryptedFlagValues} />;
}

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
      <BrutalistLayout
        showBetaFeatures={showBetaFeatures}
        enableTheming={enableTheming}
      />
    );
  }

  return (
    <StandardLayout
      showNewDesign={showNewDesign}
      showBetaFeatures={showBetaFeatures}
      enableTheming={enableTheming}
    />
  );
}

export default async function Home() {
  const showNewDesign = await newDesignFlag();
  const showBetaFeatures = await betaFeaturesFlag();
  const enableTheming = await themingFlag();

  const flagValues = {
    "new-design": showNewDesign,
    "beta-features": showBetaFeatures,
    theming: enableTheming,
  };

  return (
    <ThemeProvider enabled={enableTheming}>
      <PageContent
        showNewDesign={showNewDesign}
        showBetaFeatures={showBetaFeatures}
        enableTheming={enableTheming}
      />
      {enableTheming && <ThemeToggle showNewDesign={showNewDesign} />}
      <Suspense fallback={null}>
        <ConfidentialFlagValues values={flagValues} />
      </Suspense>
    </ThemeProvider>
  );
}
