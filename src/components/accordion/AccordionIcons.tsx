import type { ComponentType } from "react";

interface IconProps {
  className?: string;
}

export type AccordionStep = 1 | 2 | 3 | 4;

/* ===========================================
   CAMERA
=========================================== */

export const CameraIcon = ({ className }: IconProps) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="5" y="3" width="14" height="14.5" rx="3.5" />
    <circle cx="12" cy="9" r="3.5" />
    <circle cx="12" cy="14.5" r="1" fill="currentColor" stroke="none" />
    <path d="M9 17.5v3.5" />
    <path d="M15 17.5v3.5" />
    <path d="M5 21h14" />
  </svg>
);

/* ===========================================
   PLAN
=========================================== */

export const ShieldIcon = ({ className }: IconProps) => (
  <svg
    width="19"
    height="24"
    viewBox="0 0 19 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M1.39044 2.93704C1.41312 2.93283 1.43554 2.92724 1.45756 2.9203L8.83654 0.595338C9.23999 0.468221 9.67205 0.468221 10.0755 0.595338L17.4544 2.9203C17.4765 2.92724 17.4989 2.93283 17.5216 2.93704C17.5225 2.93721 17.5234 2.93738 17.5243 2.93755L17.5239 2.93748L17.5232 2.93734L17.5221 2.93715L17.525 2.93773C17.5296 2.93869 17.5385 2.94062 17.5512 2.94365C17.5766 2.94974 17.616 2.96008 17.6646 2.97565C17.7639 3.00746 17.8906 3.05765 18.0124 3.13089C18.2552 3.27702 18.412 3.46586 18.412 3.75864V12.1239C18.412 13.101 18.0517 14.1474 17.4306 15.2156C16.8116 16.2805 15.9546 17.3309 15.0138 18.305C13.1316 20.2539 10.9682 21.8422 9.874 22.5672L9.87199 22.5686C9.6192 22.7376 9.29277 22.7376 9.04005 22.5686L9.03797 22.5672C7.94376 21.8422 5.78037 20.2539 3.89816 18.305C2.95742 17.3309 2.10033 16.2805 1.48134 15.2156C0.860341 14.1474 0.5 13.101 0.5 12.1239V3.75864C0.5 3.46586 0.6568 3.27702 0.899614 3.13089C1.02132 3.05765 1.14811 3.00746 1.24742 2.97565C1.29603 2.96008 1.33544 2.94974 1.36083 2.94365C1.37346 2.94062 1.38241 2.93869 1.38706 2.93773L1.39044 2.93704ZM1.38806 2.93748L1.388 2.93748C1.38804 2.93748 1.38807 2.93748 1.3881 2.93747L1.38806 2.93748Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ===========================================
   SENSOR
=========================================== */

export const SensorIcon = ({ className }: IconProps) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M19.5526 7.13056C19.5526 7.82389 19.0904 8.28611 18.3971 8.28611H9.15263C8.45929 8.28611 7.99707 7.82389 7.99707 7.13056V1.93058C7.99707 1.23725 8.45929 0.775024 9.15263 0.775024H18.3971C19.0904 0.775024 19.5526 1.23725 19.5526 1.93058V7.13056Z" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.8101 4.2417V4.81948" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round"/>
    <path d="M15.855 4.2417V4.81948" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round"/>
    <path d="M19.1625 13.5441C16.2346 16.4329 11.3156 16.4329 8.3877 13.5441" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round"/>
    <path d="M22.9104 17.2419C17.8744 22.2108 9.67617 22.2108 4.64014 17.2419" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round"/>
    <path d="M26.7749 21.6328C19.5136 28.5661 8.03616 28.4505 0.774902 21.5172" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round"/>
  </svg>
);

/* ===========================================
   PROTECTION
=========================================== */

export const ProtectionIcon = ({ className }: IconProps) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M16.478 6.47826L12.9997 3L9.52148 6.47826" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M8.07204 10.174C8.07204 10.5776 7.91171 10.9646 7.62633 11.25C7.34095 11.5354 6.95389 11.6957 6.5503 11.6957H5.53639C5.1328 11.6957 4.74574 11.5354 4.46036 11.25C4.17497 10.9646 4.01465 10.5776 4.01465 10.174C4.01465 9.77037 4.17497 9.38331 4.46036 9.09793C4.74574 8.81255 5.1328 8.65222 5.53639 8.65222H6.5503C6.95389 8.65222 7.34095 8.81255 7.62633 9.09793C7.91171 9.38331 8.07204 9.77037 8.07204 10.174Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M15.0286 10.174H21.9851M15.0286 15.8261H21.9851M8.07204 15.8261H15.0286M8.07204 21.4783H21.9851" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

/* ===========================================
   MAP
=========================================== */

export const accordionIcons: Record<
  AccordionStep,
  ComponentType<IconProps>
> = {
  1: CameraIcon,
  2: ShieldIcon,
  3: SensorIcon,
  4: ProtectionIcon,
};