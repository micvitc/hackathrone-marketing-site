import React from "react";

export const CurvedBorder: React.FC<{
  children: React.ReactNode;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
}> = ({
  children,
  className,
  strokeColor = "#ffffff",
  strokeWidth = 2,
}) => (
  <div className={`relative bg-[#18171b] rounded-xl ${className || ""}`}>
    {/* Top Left */}
    <svg
      className="absolute -top-0 -left-0"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      style={{ zIndex: 20 }}
    >
      <path
        d="M48,4 Q4,4 4,48"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
        transform="scale(-1,-1) translate(-48,-48)"
      />
    </svg>
    {/* Top Right */}
    <svg
      className="absolute -top-0 -right-0"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      style={{ zIndex: 20 }}
    >
      <path
        d="M0,4 Q44,4 44,48"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
        transform="scale(-1,-1) translate(-48, -48)"
      />
    </svg>
    {/* Bottom Left */}
    <svg
      className="absolute -bottom-0 -left-0"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      style={{ zIndex: 20 }}
    >
      <path
        d="M48,44 Q4,44 4,0"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
        transform="scale(-1,-1) translate(-48, -48)"
      />
    </svg>
    {/* Bottom Right */}
    <svg
      className="absolute -bottom-0 -right-0"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      style={{ zIndex: 20 }}
    >
      <path
        d="M0,44 Q44,44 44,0"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
        transform="scale(-1,-1) translate(-48,-48)"
      />
    </svg>
    {/* Connecting lines */}
    {/* Top Line */}
    <div className="absolute left-11 right-11 top-0 h-0.5"
      style={{ borderTop: `${strokeWidth}px solid ${strokeColor}`, zIndex: 10 }} />
    {/* Bottom Line */}
    <div className="absolute left-11 right-11 bottom-0 h-0.5"
      style={{ borderTop: `${strokeWidth}px solid ${strokeColor}`, zIndex: 10 }} />
    {/* Left Line */}
    <div className="absolute top-11 bottom-11 left-0 w-0.5"
      style={{ borderLeft: `${strokeWidth}px solid ${strokeColor}`, zIndex: 10 }} />
    {/* Right Line */}
    <div className="absolute top-11 bottom-11 right-0 w-0.5"
      style={{ borderLeft: `${strokeWidth}px solid ${strokeColor}`, zIndex: 10 }} />

    <div className="relative z-10">{children}</div>
  </div>
);