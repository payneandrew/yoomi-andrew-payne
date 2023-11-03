import { FC, MouseEventHandler } from "react";

/**
 * Navigation Button Component.
 *
 * This component renders a navigation button with next or back direction.
 * It can be enabled or disabled and will call the onClick function when it’s clicked.
 *
 * @component
 * @param {MouseEventHandler<HTMLButtonElement>} props.onClick - onClick event for the button.
 * @param {boolean} props.disabled - button disable flag, true to disable the button.
 * @param {("next" | "back")} props.direction - Button direction, can be either 'next' or 'back'.
 * @returns {React.ElementType} Returns a Navigation Button component.
 *
 * @example
 * function ExampleComponent() {
 *   const handleClick = (event) => {
 *     console.log('Button clicked: ', event);
 *   };
 *
 *   // Use the NavButton component
 *   return (
 *     <NavButton onClick={handleClick} disabled={false} direction='next' />
 *   );
 * }
 */

type NavButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  direction: "next" | "back";
};

const NavButton: FC<NavButtonProps> = ({ onClick, disabled, direction }) => {
  const pathD =
    direction === "next"
      ? "M9.15905 6.91965L13.5444 11.305L9.15905 15.6904"
      : "M13.0573 6.91965L8.67187 11.305L13.0573 15.6904";

  return (
    <button
      onClick={onClick}
      className={`w-9 h-9 rounded-full border-2 border-black 
                 focus:outline-none transition-colors duration-200 flex items-center justify-center group
                 ${!disabled && "hover:bg-deep-blue hover:border-transparent"}`}
      data-testid={`${direction}-button`}
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        className="transition-colors duration-200"
      >
        <path
          d={pathD}
          stroke="black"
          strokeWidth="1.75416"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`${!disabled && "group-hover:stroke-white"}`}
        />
      </svg>
    </button>
  );
};

export default NavButton;
