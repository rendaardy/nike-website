import { type ReactNode } from "react";

export interface ButtonProps {
  iconUrl?: string;
  children?: ReactNode;
  fullWidth?: boolean;
  style?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

export default function Button({
  iconUrl,
  children,
  fullWidth,
  style = "primary",
  type = "button",
}: ButtonProps): JSX.Element {
  const buttonStyle = (() => {
    switch (style) {
      case "primary":
        return "bg-coral-red border-coral-red text-white";
      case "secondary":
        return "bg-white border-slate-gray text-slate-gray";
    }
  })();
  const fullWidthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${fullWidthStyle} ${buttonStyle}`}
      type={type}
    >
      {children}
      {iconUrl && (
        <img src={iconUrl} alt="icon" className="rounded-full w-5 h-5" />
      )}
    </button>
  );
}
