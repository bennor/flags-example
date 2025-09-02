import { encryptFlagValues, type FlagValuesType } from "flags";
import { FlagValues } from "flags/react";
import { Suspense } from "react";
import { NewDesignLayout } from "../components/new-design/layout";
import { ThemeToggle as NewDesignThemeToggle } from "../components/new-design/theme-toggle";
import { StandardLayout } from "../components/standard/layout";
import { ThemeToggle as StandardThemeToggle } from "../components/standard/theme-toggle";
import { ThemeProvider } from "../components/theme-provider";
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
  const flags = { showNewDesign, showBetaFeatures, enableTheming };

  if (showNewDesign) {
    return (
      <>
        <NewDesignLayout
          showBetaFeatures={showBetaFeatures}
          enableTheming={enableTheming}
        />
        {enableTheming && <NewDesignThemeToggle />}
      </>
    );
  }

  return (
    <>
      <StandardLayout {...flags} />
      {enableTheming && <StandardThemeToggle />}
    </>
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
      <Suspense fallback={null}>
        <ConfidentialFlagValues values={flagValues} />
      </Suspense>
    </ThemeProvider>
  );
}
