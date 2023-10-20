import { PropsWithChildren, forwardRef } from "react";

type SlideTopContainerProps = {
  InView: boolean;
  className?: string;
};

export const SlideTopContainer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<SlideTopContainerProps>
>(({ InView, className = "", children }, ref) => {
  return (
    <div
      className={`${className} ${InView ? "slide-top-animation" : ""}`}
      ref={ref}
    >
      {children}
    </div>
  );
});
