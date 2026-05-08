"use client";

import { useEffect } from "react";

export default function BodyClass({ className }: { className: string }) {
  useEffect(() => {
    if (!className) return;
    const tokens = className.split(/\s+/).filter(Boolean);
    tokens.forEach((t) => document.body.classList.add(t));
    return () => {
      tokens.forEach((t) => document.body.classList.remove(t));
    };
  }, [className]);
  return null;
}
