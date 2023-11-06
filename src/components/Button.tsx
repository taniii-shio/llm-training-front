import React from "react";

const variants = {
  primary: "text-white bg-sky-600",
  danger: "text-white bg-red-600",
}

const sizes = {
  sm: "py-2 px-4 text-sm",
  md: "py-2 px-6 text-md",
  lg: "py-3 px-8 text-lg",
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  // children: React.ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  isLoading?: boolean;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = "md",
  isLoading = false,
  className = "",
  ...prop
}) => {
  return (
    <>
    {isLoading ? (
      <div className={`${className} ${variants[variant]} ${sizes[size]} border border-gray-300 rounded-md text-center opacity-60`}>
        loading...
      </div>
    ) : (
      <button {...prop} className={`${className} ${variants[variant]} ${sizes[size]} border border-gray-300 rounded-md hover:opacity-80`}>
        {children}
      </button>
    )}
    </>
  );
};

export default Button;
