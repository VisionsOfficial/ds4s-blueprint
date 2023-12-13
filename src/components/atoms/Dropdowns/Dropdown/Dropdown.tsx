import { PropsWithChildren, useEffect, useRef, useState } from "react";
import Styles from "./Dropdown.module.scss";
import { Link } from "react-router-dom";

type DropdownProps = {
  text: string;
  options: {
    name: string;
    url: string;
    navigate?: string;
  }[];
};

export const Dropdown = ({
  text = "",
  options,
}: PropsWithChildren<DropdownProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={`${Styles.Dropdown}`}>
      <button onClick={toggleDropdown} className={Styles.button}>
        {text}
      </button>
      {isOpen && (
        <ul className={Styles.DropdownContent}>
          {options.map((option, index) => (
            <li key={index}>
              <Link
                to={option.url}
                className={Styles.item}
                onClick={toggleDropdown}
              >
                {option.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
