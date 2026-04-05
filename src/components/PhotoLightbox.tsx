import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import {
  computeExpandedRect,
  invertTransform,
  type IViewportRect,
} from "./photoLightboxGeometry";

export interface IPhotoLightboxRequest {
  alt: string;
  first: IViewportRect;
  src: string;
}

export interface IPhotoLightboxProps {
  onExited: () => void;
  request: IPhotoLightboxRequest | null;
}

type ILightboxPhase = "opening" | "open" | "closing";

const LIGHTBOX_EASING = "cubic-bezier(0.2, 0.8, 0.2, 1)";
const LIGHTBOX_DURATION = "0.5s";

export function PhotoLightbox(props: IPhotoLightboxProps) {
  const { onExited, request } = props;
  const [phase, setPhase] = useState<ILightboxPhase>("opening");
  const phaseRef = useRef(phase);
  phaseRef.current = phase;

  useLayoutEffect(() => {
    setPhase("opening");
  }, [request]);

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

  useEffect(() => {
    if (!request || phase === "closing") {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setPhase((prev) => (prev !== "closing" ? "closing" : prev));
      }
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [request, phase]);

  const requestClose = () => {
    setPhase((prev) => (prev !== "closing" ? "closing" : prev));
  };

  const handleLightboxImageTransitionEnd = () => {
    if (phaseRef.current !== "closing") {
      return;
    }
    onExited();
  };

  if (!request) {
    return null;
  }

  const last = computeExpandedRect(request.first);

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
      <Box
        alt={request.alt}
        aria-label={request.alt}
        component="img"
        onClick={(event) => {
          event.stopPropagation();
          requestClose();
        }}
        onTransitionEnd={handleLightboxImageTransitionEnd}
        src={request.src}
        sx={{
          cursor: "zoom-out",
          height: last.height,
          left: last.left,
          objectFit: "contain",
          position: "fixed",
          top: last.top,
          transform:
            phase === "open"
              ? "translate(0px, 0px) scale(1, 1)"
              : invertTransform(request.first, last),
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
