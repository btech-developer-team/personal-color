"use client";

import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

const TRACKING_KEYS = ["ref", "event"] as const;

type SearchParamReader = {
  get: (key: string) => string | null;
};

export function withTrackingParams(href: string, searchParams: SearchParamReader) {
  const [pathname, query = ""] = href.split("?");
  const next = new URLSearchParams(query);

  for (const key of TRACKING_KEYS) {
    const value = searchParams.get(key);
    if (value) next.set(key, value);
  }

  const qs = next.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

export function useTrackingHref() {
  const searchParams = useSearchParams();

  return useCallback(
    (href: string) => withTrackingParams(href, searchParams),
    [searchParams]
  );
}
