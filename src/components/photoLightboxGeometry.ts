export interface IViewportRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export function readViewportRect(rect: DOMRect): IViewportRect {
  return {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
  };
}

export function computeExpandedRect(first: IViewportRect): IViewportRect {
  const maxW = window.innerWidth * 0.92;
  const maxH = window.innerHeight * 0.92;
  const aspect = first.width / first.height;
  let width = maxW;
  let height = width / aspect;
  if (height > maxH) {
    height = maxH;
    width = height * aspect;
  }
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  return { left, top, width, height };
}

export function invertTransform(
  first: IViewportRect,
  last: IViewportRect,
): string {
  const dx = first.left - last.left;
  const dy = first.top - last.top;
  const sx = first.width / last.width;
  const sy = first.height / last.height;
  return `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})`;
}

export function getLightboxThumbRect(
  thumbIdPrefix: string,
  index: number,
): IViewportRect | null {
  const el = document.getElementById(
    `lightbox-thumb-${thumbIdPrefix}-${index}`,
  );
  if (!el) {
    return null;
  }
  return readViewportRect(el.getBoundingClientRect());
}
