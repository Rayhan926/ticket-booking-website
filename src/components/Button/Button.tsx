import React from "react";

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className = "", ...props }, ref) => {
  return (
    <button
      ref={ref}
      {...props}
      className={`w-full px-5 py-3 bg-primary hover:bg-primary-hover duration-150 text-white font-semibold rounded-md uppercase ${className}`}
    ></button>
  );
});

Button.displayName = "Button";
export default Button;
