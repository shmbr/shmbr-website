import type { ReactNode } from "react";
import { PostHogProvider } from "@posthog/react";

export interface IAnalyticsProviderProps {
  children: ReactNode;
}

const POSTHOG_KEY = import.meta.env.VITE_POSTHOG_PROJECT_TOKEN;
const POSTHOG_HOST =
  import.meta.env.VITE_POSTHOG_HOST ?? "https://eu.i.posthog.com";

export function AnalyticsProvider(props: IAnalyticsProviderProps) {
  const { children } = props;

  if (!POSTHOG_KEY) {
    return children;
  }

  return (
    <PostHogProvider
      apiKey={POSTHOG_KEY}
      options={{
        api_host: POSTHOG_HOST,
        defaults: "2026-05-30",
      }}
    >
      {children}
    </PostHogProvider>
  );
}
