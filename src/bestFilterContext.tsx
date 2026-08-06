import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { IPhotoImage } from "./components/PhotoPlaceBlock";

const BEST_PARAM = "best";

function readBestFromSearch(search: string): boolean {
  const params = new URLSearchParams(search);
  return params.get(BEST_PARAM) === "true";
}

function buildSearchWithBest(
  showBestOnly: boolean,
  currentSearch: string,
): string {
  const params = new URLSearchParams(currentSearch);
  if (showBestOnly) {
    params.set(BEST_PARAM, "true");
  } else {
    params.delete(BEST_PARAM);
  }
  const next = params.toString();
  return next ? `?${next}` : "";
}

interface IBestFilterContextValue {
  showBestOnly: boolean;
  setBestFilter: (showBestOnly: boolean) => void;
}

const BestFilterContext = createContext<IBestFilterContextValue | null>(null);

export interface IBestFilterProviderProps {
  children: ReactNode;
}

export function BestFilterProvider(props: IBestFilterProviderProps) {
  const { children } = props;
  const [showBestOnly, setShowBestOnly] = useState(() =>
    readBestFromSearch(window.location.search),
  );

  useEffect(() => {
    const onPopState = () => {
      setShowBestOnly(readBestFromSearch(window.location.search));
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const setBestFilter = useCallback((next: boolean) => {
    setShowBestOnly(next);
    const search = buildSearchWithBest(next, window.location.search);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${search}${window.location.hash}`,
    );
  }, []);

  const value = useMemo(
    () => ({ showBestOnly, setBestFilter }),
    [showBestOnly, setBestFilter],
  );

  return (
    <BestFilterContext.Provider value={value}>
      {children}
    </BestFilterContext.Provider>
  );
}

export function useBestFilter(): IBestFilterContextValue {
  const context = useContext(BestFilterContext);
  if (!context) {
    throw new Error("useBestFilter must be used within BestFilterProvider");
  }
  return context;
}

export function filterPlaceImages(
  images: IPhotoImage[],
  showBestOnly: boolean,
): IPhotoImage[] {
  return showBestOnly ? images.filter((image) => image.best) : images;
}
