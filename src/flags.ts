import { get } from "@vercel/edge-config";
import { flag } from "flags/next";

export const newDesignFlag = flag({
  key: "new-design",
  async decide() {
    try {
      const value = await get("new-design");
      return value !== undefined ? Boolean(value) : false;
    } catch {
      console.warn("Edge config lookup failed for `new-design`");
      return false;
    }
  },
});

export const betaFeaturesFlag = flag({
  key: "beta-features",
  async decide() {
    try {
      const value = await get("beta-features");
      return value !== undefined ? Boolean(value) : false;
    } catch {
      console.warn("Edge config lookup failed for `beta-features`");
      return false;
    }
  },
});

export const themingFlag = flag({
  key: "theming",
  async decide() {
    try {
      const value = await get("theming");
      return value !== undefined ? Boolean(value) : false;
    } catch {
      console.warn("Edge config lookup failed for `theming`");
      return false;
    }
  },
});
