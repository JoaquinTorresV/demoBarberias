"use client";
import { createContext, useContext } from "react";
import type { SiteConfig } from "./site.types";
import config from "./site.config";

const SiteCtx = createContext<SiteConfig>(config);
export const useSite = () => useContext(SiteCtx);

export default function SiteProvider({ children }: { children: React.ReactNode }) {
  return <SiteCtx.Provider value={config}>{children}</SiteCtx.Provider>;
}
