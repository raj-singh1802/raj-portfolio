export const Github = ({ size = 24, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export const Linkedin = ({ size = 24, className = '', ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const PythonLogo = ({ size = 24, className = '', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <ellipse cx="12" cy="6.5" rx="7" ry="3.5" fill="currentColor" opacity="0.9" />
    <ellipse cx="12" cy="17.5" rx="7" ry="3.5" fill="currentColor" opacity="0.5" />
    <rect x="5" y="3" width="14" height="18" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <path d="M10 6.5v11M14 6.5v11" stroke="currentColor" strokeWidth="1" opacity="0.4" />
  </svg>
);

export const DockerLogo = ({ size = 24, className = '', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <rect x="3" y="10" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.8" />
    <rect x="8" y="10" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.8" />
    <rect x="13" y="10" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.8" />
    <rect x="8" y="5" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
    <rect x="13" y="5" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
    <rect x="18" y="10" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.8" />
    <path d="M3 15c0 3 2 5 6 5s7-2 8-5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" fill="none" />
    <circle cx="21" cy="8" r="1.5" fill="currentColor" opacity="0.4" />
  </svg>
);

export const PostgresLogo = ({ size = 24, className = '', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M12 3c-1 0-2 .5-2 2v14c0 1.5 1 2 2 2s2-.5 2-2V5c0-1.5-1-2-2-2z" fill="currentColor" opacity="0.8" />
    <path d="M7 7c-2 1-3 3-2 5s3 4 5 4" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
    <path d="M17 7c2 1 3 3 2 5s-3 4-5 4" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
    <circle cx="12" cy="5" r="1" fill="currentColor" opacity="0.4" />
  </svg>
);

export const GitLogo = ({ size = 24, className = '', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M12 2L2 12l10 10 10-10L12 2z" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.7" />
    <path d="M12 6v3M12 15v3" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </svg>
);

export const FastAPILogo = ({ size = 24, className = '', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8" />
    <path d="M13 7l-4 6h3.5l-1.5 4 4.5-6H12l1.5-4z" fill="currentColor" opacity="0.7" />
  </svg>
);

export const RedisLogo = ({ size = 24, className = '', ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} {...props}>
    <path d="M8 4l8 8-8 8" stroke="currentColor" strokeWidth="1.8" fill="none" opacity="0.7" />
    <path d="M12 3l9 9-9 9" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.4" />
    <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.8" />
  </svg>
);
