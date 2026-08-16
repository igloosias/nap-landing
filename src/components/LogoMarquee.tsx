import React, { memo, useState, useEffect, useRef } from "react";
import { useMotionValue, animate, motion } from "motion/react";

export type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type InfiniteSliderProps = {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

const InfiniteSlider = memo(function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const translation = useMotionValue(0);

  // Measure the doubled row width, then animate by exactly half of it
  // so the loop snaps cleanly (one full copy of content = one cycle).
  useEffect(() => {
    const el = innerRef.current;
    if (!el) return;

    const measure = () => {
      // Total scrollable width of the doubled content
      const w = el.scrollWidth;
      // One full copy = half of the doubled row (since children are rendered 2×)
      const half = w / 2;
      setContentWidth(half);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (!contentWidth) return;
    const from = reverse ? -contentWidth : 0;
    const to = reverse ? 0 : -contentWidth;
    translation.set(from);
    const controls = animate(translation, [from, to], {
      ease: "linear",
      duration: currentDuration,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
      onRepeat: () => translation.set(from),
    });
    return () => controls.stop();
  }, [contentWidth, currentDuration, reverse, translation]);

  const hoverProps = durationOnHover
    ? {
        onMouseEnter: () => setCurrentDuration(durationOnHover),
        onMouseLeave: () => setCurrentDuration(duration),
      }
    : {};

  return (
    <div className={("overflow-hidden " + (className ?? "")).trim()}>
      <motion.div
        ref={innerRef}
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
});

const LogoImage = memo(function LogoImage({ logo }: { logo: Logo }) {
  if (logo.src) {
    return (
      <img
        alt={logo.alt}
        src={logo.src}
        width={logo.width ?? "auto"}
        height={logo.height ?? "auto"}
        loading="lazy"
        className="logo-marquee-img"
      />
    );
  }
  return (
    <span className="logo-marquee-wordmark" aria-label={logo.alt}>
      {logo.alt}
    </span>
  );
});

export const LogoMarquee = memo(function LogoMarquee({
  logos,
  className,
}: {
  logos: Logo[];
  className?: string;
}) {
  return (
    <div className={("logo-marquee " + (className ?? "")).trim()}>
      <InfiniteSlider gap={42} reverse duration={80} durationOnHover={25}>
        {[...logos, ...logos].map((logo, i) => (
          <LogoImage key={`${logo.alt}-${i}`} logo={logo} />
        ))}
      </InfiniteSlider>
    </div>
  );
});

LogoMarquee.displayName = "LogoMarquee";
export default LogoMarquee;