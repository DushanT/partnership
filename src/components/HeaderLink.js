import { twMerge } from "tailwind-merge";

export default function HeaderLink({ children, className, href }) {
  return (
    <a href={href} className={twMerge("text-link", className)}>
      {children}
    </a>
  );
}
