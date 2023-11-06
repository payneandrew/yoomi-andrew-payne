import { ChevronIcon } from "../icons/ChevronIcon";
import { NotificationIcon } from "../icons/NotificationIcon";

const Topbar: React.FC = () => {
  return (
    <div className="p-3 flex justify-between items-center text-black rounded-2xl border border-gray-300 bg-white">
      <button className="flex items-center gap-1">
        <ChevronIcon />
        <span className="mr-2 font-bold text-2xl">Workout</span>
      </button>
      <div className="flex gap-6 items-center">
        <button>
          <NotificationIcon />
        </button>
        <button>
          <img
            src="/images/user-profile.png"
            alt=""
            className="h-8 w-8 rounded"
          />
        </button>
        <button className="flex flex-col items-center cursor-pointer">
          <span className="text-sm">Jane Doerr</span>
          <span className="text-xs font-light">jdoerr@gmail.com</span>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
