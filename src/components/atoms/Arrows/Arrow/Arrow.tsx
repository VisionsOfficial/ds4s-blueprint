import { PropsWithChildren } from "react";
import Styles from "./Arrow.module.scss";

type ArrowProps = {
  type?: "simple" | "double";
  text?: string;
  className?: string;
};

export const Arrow = ({
  className = "",
  text,
  type = "simple",
}: PropsWithChildren<ArrowProps>) => {
  const setSvg = () => {
    switch (type) {
      case "simple":
        return (
          <svg viewBox="0 0 350 100" className={`${Styles.Arrow} ${className}`}>
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" />
              </marker>
            </defs>
            <line
              x1="0"
              y1="50"
              x2="250"
              y2="50"
              stroke="#000"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
          </svg>
        );
      case "double":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 550 100"
            className={`${Styles.Arrow} ${className}`}
          >
            <defs>
              <marker
                id="startarrow"
                markerWidth="10"
                markerHeight="7"
                refX="10"
                refY="3.5"
                orient="auto"
              >
                <polygon points="10 0, 10 7, 0 3.5" fill="#000" />
              </marker>
              <marker
                id="endarrow"
                markerWidth="10"
                markerHeight="7"
                refX="0"
                refY="3.5"
                orient="auto"
                markerUnits="strokeWidth"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
              </marker>
            </defs>
            <line
              x1="100"
              y1="50"
              x2="440"
              y2="50"
              stroke="#000"
              strokeWidth="6"
              markerEnd="url(#endarrow)"
              markerStart="url(#startarrow)"
            />
            {text && (
              <text
                x="260"
                y="25"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                {text}
              </text>
            )}
          </svg>
        );

      default:
        return null;
    }
  };

  return setSvg();
};
