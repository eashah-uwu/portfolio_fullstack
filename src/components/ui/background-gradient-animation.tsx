"use client";

import { useEffect, useRef } from "react";
import { clsx } from "clsx";

type BackgroundGradientAnimationProps = {
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  interactive?: boolean;
  className?: string;
  containerClassName?: string;
};

export function BackgroundGradientAnimation({
  firstColor = "218, 198, 235",
  secondColor = "168, 216, 234",
  thirdColor = "239, 233, 215",
  fourthColor = "58, 74, 22",
  fifthColor = "255, 255, 255",
  pointerColor = "218, 198, 235",
  size = "42%",
  blendingValue = "soft-light",
  interactive = true,
  className,
  containerClassName,
}: BackgroundGradientAnimationProps) {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const curXRef = useRef(0);
  const curYRef = useRef(0);
  const targetXRef = useRef(0);
  const targetYRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  useEffect(() => {
    if (!interactive) return;

    function setInitialTarget() {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      curXRef.current = rect.width / 2;
      curYRef.current = rect.height / 2;
      targetXRef.current = rect.width / 2;
      targetYRef.current = rect.height / 2;
    }

    function updateTarget(event: PointerEvent) {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      targetXRef.current = event.clientX - rect.left;
      targetYRef.current = event.clientY - rect.top;
    }

    function animateMovement() {
      if (interactiveRef.current) {
        curXRef.current += (targetXRef.current - curXRef.current) / 10;
        curYRef.current += (targetYRef.current - curYRef.current) / 10;
        interactiveRef.current.style.transform = `translate3d(${Math.round(
          curXRef.current,
        )}px, ${Math.round(curYRef.current)}px, 0) translate(-50%, -50%)`;
      }

      animationFrameRef.current = requestAnimationFrame(animateMovement);
    }

    setInitialTarget();
    window.addEventListener("pointermove", updateTarget, { passive: true });
    window.addEventListener("resize", setInitialTarget);
    animationFrameRef.current = requestAnimationFrame(animateMovement);

    return () => {
      window.removeEventListener("pointermove", updateTarget);
      window.removeEventListener("resize", setInitialTarget);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        "pointer-events-none absolute inset-0 overflow-hidden bg-[#f0efe9]",
        containerClassName,
      )}
      style={
        {
          "--first-color": firstColor,
          "--second-color": secondColor,
          "--third-color": thirdColor,
          "--fourth-color": fourthColor,
          "--fifth-color": fifthColor,
          "--pointer-color": pointerColor,
          "--gradient-size": size,
          "--blending-value": blendingValue,
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      <svg className="hidden">
        <defs>
          <filter id="portfolio-gradient-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div
        className={clsx(
          "portfolio-gradients-container",
          "portfolio-goo-filter",
          className,
        )}
      >
        <div className="gradient-orb gradient-orb-first" />
        <div className="gradient-orb gradient-orb-second" />
        <div className="gradient-orb gradient-orb-third" />
        <div className="gradient-orb gradient-orb-fourth" />
        <div className="gradient-orb gradient-orb-fifth" />
        {interactive && <div ref={interactiveRef} className="gradient-orb-pointer" />}
      </div>
    </div>
  );
}
