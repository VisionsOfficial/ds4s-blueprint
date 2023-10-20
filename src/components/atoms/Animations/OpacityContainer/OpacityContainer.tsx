import { PropsWithChildren, forwardRef } from "react";

type OpacityContainerProps = {
  InView: boolean;
  className?: string;
};

export const OpacityContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<OpacityContainerProps>
>(({ InView, className = "", children }, ref) => {
  return (
    <div
      className={`${InView ? "opacity-animation" : ""} ${className}`}
      ref={ref}
    >
      {children}
    </div>
  );
});
