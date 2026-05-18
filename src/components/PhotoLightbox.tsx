import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Box, ButtonBase, useMediaQuery, useTheme } from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  computeExpandedRect,
  getLightboxThumbRect,
  invertTransform,
  type IViewportRect,
} from "./photoLightboxGeometry";

export interface IPhotoLightboxRequest {
  imageUrls: string[];
  index: number;
  openFirst: IViewportRect;
  placeName: string;
  sessionKey: number;
  thumbIdPrefix: string;
}

export interface IPhotoLightboxProps {
  onExited: () => void;
  onNavigateIndex: (index: number) => void;
  request: IPhotoLightboxRequest | null;
}

type ILightboxPhase = "opening" | "open" | "closing";

const LIGHTBOX_EASING = "cubic-bezier(0.2, 0.8, 0.2, 1)";
const LIGHTBOX_DURATION = "0.4s";

export function PhotoLightbox(props: IPhotoLightboxProps) {
  const { onExited, onNavigateIndex, request } = props;
  const [phase, setPhase] = useState<ILightboxPhase>("opening");
  const [closeAnchor, setCloseAnchor] = useState<IViewportRect | null>(null);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;
  const lastExpandedRef = useRef<IViewportRect | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useLayoutEffect(() => {
    if (!request) {
      return;
    }
    setCloseAnchor(null);
    setPhase("opening");
  }, [request?.sessionKey]);

  useLayoutEffect(() => {
    if (!request || phase !== "opening") {
      return;
    }
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setPhase((prev) => (prev === "opening" ? "open" : prev));
      });
    });
    return () => cancelAnimationFrame(id);
  }, [request, phase]);

  const beginClose = useCallback(() => {
    if (!request) {
      return;
    }
    const anchor =
      getLightboxThumbRect(request.thumbIdPrefix, request.index) ??
      request.openFirst;
    setCloseAnchor(anchor);
    setPhase((prev) => (prev !== "closing" ? "closing" : prev));
  }, [request]);

  useEffect(() => {
    if (!request) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [request]);

  useEffect(() => {
    if (!request || phase === "closing") {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        beginClose();
        return;
      }
      if (event.key === "ArrowLeft" && request.index > 0) {
        event.preventDefault();
        onNavigateIndex(request.index - 1);
        return;
      }
      if (
        event.key === "ArrowRight" &&
        request.index < request.imageUrls.length - 1
      ) {
        event.preventDefault();
        onNavigateIndex(request.index + 1);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [beginClose, onNavigateIndex, request, phase]);

  const requestClose = beginClose;

  const handleLightboxImageTransitionEnd = () => {
    if (phaseRef.current !== "closing") {
      return;
    }
    onExited();
  };

  if (!request) {
    return null;
  }

  const { imageUrls, index, openFirst, placeName, thumbIdPrefix } = request;
  const src = imageUrls[index];
  const alt = `${placeName} — ${index + 1}`;
  const layoutFirst = getLightboxThumbRect(thumbIdPrefix, index) ?? openFirst;
  const last = computeExpandedRect(layoutFirst);
  const lastOpen = computeExpandedRect(openFirst);

  if (phase === "open") {
    lastExpandedRef.current = last;
  }

  const lastForClosing = lastExpandedRef.current ?? last;
  const anchorForClosing = closeAnchor ?? openFirst;

  let transform: string;
  if (phase === "opening") {
    transform = invertTransform(openFirst, lastOpen);
  } else if (phase === "closing") {
    transform = invertTransform(anchorForClosing, lastForClosing);
  } else {
    transform = "translate(0px, 0px) scale(1, 1)";
  }

  const showNav = imageUrls.length > 1 && phase === "open";
  const canGoPrev = index > 0;
  const canGoNext = index < imageUrls.length - 1;

  const navZoneWidth = isMobile ? 56 : 72;
  const navZoneSx = {
    alignItems: "center",
    backgroundColor: "rgb(244, 244, 244)",
    borderColor: "text.primary",
    bottom: 0,
    color: "text.primary",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    p: 0,
    position: "fixed",
    top: 0,
    width: navZoneWidth,
    zIndex: 2,
    borderWidth: 0,
    transition: "background-color 0.2s ease-in-out",
    "&:disabled": {
      cursor: "default",
      opacity: 0.35,
    },
    "&:hover": {
      backgroundColor: "rgb(236, 236, 236)",
    },
    ...(isMobile && {
      borderColor: "transparent !important",
      background: "transparent !important",
      color: "white !important",
      "&:hover": {
        background: "transparent !important",
      },
    }),
  };

  return (
    <Box
      aria-modal="true"
      role="dialog"
      sx={{
        inset: 0,
        position: "fixed",
        zIndex: (theme) => theme.zIndex.modal,
      }}
    >
      <Box
        onClick={requestClose}
        sx={{
          backgroundColor:
            phase === "open"
              ? "rgba(255, 255, 255, 0.64)"
              : "rgba(255, 255, 255, 0)",
          inset: 0,
          position: "absolute",
          transition:
            phase === "opening"
              ? "none"
              : `background-color ${LIGHTBOX_DURATION} ${LIGHTBOX_EASING}`,
        }}
      />
      {showNav && (
        <>
          <Box
            aria-label="Previous photo"
            component={ButtonBase}
            disabled={!canGoPrev}
            onClick={(event) => {
              event.stopPropagation();
              if (canGoPrev) {
                onNavigateIndex(index - 1);
              }
            }}
            sx={{
              ...navZoneSx,
              borderRight: 2,
              borderRightStyle: "dashed",
              left: 0,
            }}
            type="button"
          >
            <ChevronLeft
              size={isMobile ? 20 : 28}
              strokeWidth={1.75}
              style={
                isMobile
                  ? {
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      borderRadius: "20%",
                    }
                  : {}
              }
            />
          </Box>
          <Box
            aria-label="Next photo"
            component={ButtonBase}
            disabled={!canGoNext}
            onClick={(event) => {
              event.stopPropagation();
              if (canGoNext) {
                onNavigateIndex(index + 1);
              }
            }}
            sx={{
              ...navZoneSx,
              borderLeft: 2,
              borderLeftStyle: "dashed",
              right: 0,
            }}
            type="button"
          >
            <ChevronRight
              size={isMobile ? 20 : 28}
              strokeWidth={1.75}
              style={
                isMobile
                  ? {
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      borderRadius: "20%",
                    }
                  : {}
              }
            />
          </Box>
        </>
      )}
      <Box
        alt={alt}
        aria-label={`${alt} — enlarged`}
        component="img"
        onClick={(event) => {
          event.stopPropagation();
          requestClose();
        }}
        onTransitionEnd={handleLightboxImageTransitionEnd}
        src={src}
        sx={{
          cursor: "zoom-out",
          height: last.height,
          left: last.left,
          objectFit: "contain",
          position: "fixed",
          top: last.top,
          transform,
          transformOrigin: "top left",
          transition:
            phase === "opening"
              ? "none"
              : `transform ${LIGHTBOX_DURATION} ${LIGHTBOX_EASING}`,
          width: last.width,
          zIndex: 1,
        }}
      />
    </Box>
  );
}
