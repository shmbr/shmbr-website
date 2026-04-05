import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Box, IconButton } from "@mui/material";
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
const LIGHTBOX_DURATION = "0.5s";

export function PhotoLightbox(props: IPhotoLightboxProps) {
  const { onExited, onNavigateIndex, request } = props;
  const [phase, setPhase] = useState<ILightboxPhase>("opening");
  const [closeAnchor, setCloseAnchor] = useState<IViewportRect | null>(null);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;
  const lastExpandedRef = useRef<IViewportRect | null>(null);

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
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
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

  const navButtonSx = {
    color: "text.primary",
    position: "fixed",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 2,
    border: 2,
    borderStyle: "dashed",
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
          <IconButton
            aria-label="Previous photo"
            disabled={!canGoPrev}
            onClick={(event) => {
              event.stopPropagation();
              if (canGoPrev) {
                onNavigateIndex(index - 1);
              }
            }}
            size="small"
            sx={{ ...navButtonSx, left: 12 }}
          >
            <ChevronLeft size={36} strokeWidth={1.75} />
          </IconButton>
          <IconButton
            aria-label="Next photo"
            disabled={!canGoNext}
            onClick={(event) => {
              event.stopPropagation();
              if (canGoNext) {
                onNavigateIndex(index + 1);
              }
            }}
            size="small"
            sx={{ ...navButtonSx, right: 12 }}
          >
            <ChevronRight size={36} strokeWidth={1.75} />
          </IconButton>
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
