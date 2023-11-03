import { FC, MouseEventHandler } from "react";

type BackButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
};

const NextButton: FC<BackButtonProps> = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    className="w-9 h-9 rounded-full hover:bg-deep-blue border-2 border-black 
                 hover:border-transparent focus:outline-none transition-colors duration-200 flex items-center justify-center group"
    data-testid="next-button"
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
        d="M9.15905 6.91965L13.5444 11.305L9.15905 15.6904"
        stroke="black"
        strokeWidth="1.75416"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="group-hover:stroke-white"
      />
    </svg>
  </button>
);

export default NextButton;
