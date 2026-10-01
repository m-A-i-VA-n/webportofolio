"use client";

import { useEffect, useState } from "react";

export default function Background() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="background-wrapper">
      <div
        className="background-image"
        style={{
          transform: `translate3d(-50%, ${scrollY * 0.08}px, 0) scale(1.15)`,
        }}
      />

      <div className="background-overlay" />
    </div>
  );
}