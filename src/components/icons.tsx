type IconProps = { className?: string; size?: number };

const baseProps = (size?: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function Headset({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

export function Handshake({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M11 17l2 2a1 1 0 0 0 3-3" />
      <path d="M14 14l2.5 2.5a1 1 0 1 0 3-3L17 11" />
      <path d="M16.5 8.5l-1-1a3 3 0 0 0-4 0L8 11l1 1c.78.78 2.04.78 2.83 0L13 11" />
      <path d="M9 13l3 3" />
      <path d="M2 13l4-4 5 5" />
    </svg>
  );
}

export function Clipboard({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M9 5h6a1 1 0 0 1 1 1v1H8V6a1 1 0 0 1 1-1z" />
      <path d="M16 6h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function Monitor({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 18v3" />
      <circle cx="17" cy="9" r="1.5" />
    </svg>
  );
}

export function Package({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M21 8L12 3 3 8v8l9 5 9-5z" />
      <path d="M3 8l9 5 9-5" />
      <path d="M12 13v8" />
      <path d="M16.5 5.5l-9 5" />
    </svg>
  );
}

export function Calendar({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4M16 3v4" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

export function Wrench({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.5-.5-2.5z" />
    </svg>
  );
}

export function Truck({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M2 7h11v9H2z" />
      <path d="M13 10h5l3 3v3h-8z" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

export function CheckCircle({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  );
}

export function Share({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="M8.2 10.8l7.6-4.6M8.2 13.2l7.6 4.6" />
    </svg>
  );
}

export function Printer({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M6 9V3h12v6" />
      <rect x="3" y="9" width="18" height="9" rx="2" />
      <rect x="6" y="14" width="12" height="7" />
      <circle cx="17.5" cy="12" r="0.7" fill="currentColor" />
    </svg>
  );
}

export function Gear({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 0 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 0 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3 1.7 1.7 0 0 0 1-1.5V3a2 2 0 0 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8 1.7 1.7 0 0 0 1.5 1H21a2 2 0 0 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
    </svg>
  );
}

export function Card({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <rect x="2" y="6" width="20" height="13" rx="2" />
      <path d="M2 11h20" />
      <path d="M6 16h4" />
    </svg>
  );
}

export function Sliders({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M5 4v6M5 14v6M12 4v3M12 11v9M19 4v9M19 17v3" />
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="9" r="2" />
      <circle cx="19" cy="15" r="2" />
    </svg>
  );
}

export function Code({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M16 18l6-6-6-6" />
      <path d="M8 6l-6 6 6 6" />
      <path d="M14 4l-4 16" />
    </svg>
  );
}

export function Store({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M3 9l1.5-5h15L21 9" />
      <path d="M3 9v11h18V9" />
      <path d="M9 22v-8h6v8" />
      <path d="M3 9h18" />
    </svg>
  );
}

export function Laptop({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M2 19h20" />
      <path d="M9 19l1-3h4l1 3" />
    </svg>
  );
}

export function Tools({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M14 6l3 3-9 9-3-3z" />
      <path d="M5 15l-2 6 6-2" />
      <path d="M14 6l1.5-1.5a2 2 0 1 1 2.8 2.8L17 9" />
      <path d="M16 11l4 4" />
    </svg>
  );
}

export function Search({ className = "w-4 h-4", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function Phone({ className = "w-4 h-4", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72a2 2 0 0 1 1.72 2z" />
    </svg>
  );
}

export function Globe({ className = "w-4 h-4", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

export function ChevronDown({ className = "w-4 h-4", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function ChevronLeft({ className = "w-4 h-4", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M15 6l-6 6 6 6" />
    </svg>
  );
}

export function ChevronRight({ className = "w-4 h-4", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowRight({ className = "w-4 h-4", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function ArrowDown({ className = "w-4 h-4", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M12 5v14" />
      <path d="M6 13l6 6 6-6" />
    </svg>
  );
}

export function Bulb({ className = "w-12 h-12", size }: IconProps) {
  return (
    <svg className={className} {...baseProps(size)}>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.2 1 2v1.3h6V16.7c0-.8.4-1.5 1-2A7 7 0 0 0 12 2z" />
    </svg>
  );
}
