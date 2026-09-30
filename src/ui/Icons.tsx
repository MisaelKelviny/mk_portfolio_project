import type { ReactNode, SVGProps } from "react";

function Icon({
  size,
  strokeWidth = 1.8,
  children,
  ...props
}: Readonly<
  SVGProps<SVGSVGElement> & { size: number; children: ReactNode }
>) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const GlobeIcon = () => (
  <Icon size={18} strokeWidth={1.6}>
    <circle cx="12" cy="12" r="9.5" />
    <path d="M2.5 12h19" />
    <path d="M12 2.5c2.6 2.8 3.9 6 3.9 9.5s-1.3 6.7-3.9 9.5c-2.6-2.8-3.9-6-3.9-9.5s1.3-6.7 3.9-9.5z" />
  </Icon>
);

export const DownloadIcon = () => (
  <Icon size={16} strokeWidth={2}>
    <path d="M12 4v11" />
    <path d="M7 10l5 5 5-5" />
    <path d="M5 20h14" />
  </Icon>
);

export const LinkedinIcon = () => (
  <Icon size={16}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 10v7" />
    <path d="M8 7v.01" />
    <path d="M12 17v-4a2.5 2.5 0 0 1 5 0v4" />
    <path d="M12 10v7" />
  </Icon>
);

export const GithubIcon = () => (
  <Icon size={16}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </Icon>
);

export const PinIcon = () => (
  <Icon size={15}>
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Icon>
);

export const ArrowUpRightIcon = () => (
  <Icon size={14} strokeWidth={2}>
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </Icon>
);
