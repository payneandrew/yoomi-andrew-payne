/**
 * Timer Component.
 *
 * This component takes children props and returns a styled div
 * containing those children. It is meant to be used as a timer interface.
 *
 * @component
 * @param {React.ReactNode} props.children - The content to be wrapped within the timer
 *
 * @returns {React.ElementType} Returns a Timer component wrapping the provided children.
 *
 * @example
 *
 * function ExampleComponent() {
 *   return <Timer>00:00</Timer>;
 * }
 */
interface TimerProps {
  children?: React.ReactNode;
}

const Timer: React.FC<TimerProps> = ({ children }) => (
  <div className="border-deep-blue bg-deep-blue justify-center items-center rounded p-2 flex text-white font-inter-font font-semibold text-xl">
    {children}
  </div>
);

export default Timer;
