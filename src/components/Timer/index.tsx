interface TimerProps {
  children?: React.ReactNode;
}

const Timer: React.FC<TimerProps> = ({ children }) => (
  <div className="border-deep-blue bg-deep-blue justify-center items-center rounded p-2 flex text-white font-inter-font font-bold">
    {children}
  </div>
);

export default Timer;
