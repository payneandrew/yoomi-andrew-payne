import { NotificationIcon } from "../icons/NotificationIcon";

const Topbar: React.FC = () => {
  return (
    <div className="p-3 flex justify-between items-center text-black rounded-2xl border border-gray-300">
      <span className="mr-2 font-bold text-2xl">Workout</span>
      <div className="relative">
        <input
          type="text"
          placeholder="Search here..."
          className="bg-white bg-opacity-25 px-3 py-2 rounded-full text-sm outline-none"
        />
        {/* <SearchIcon className="h-6 w-6 absolute top-2 right-3 text-white" /> */}
      </div>
      <div className="flex gap-6 items-center">
        <NotificationIcon />
        <img
          src="/images/user-profile.png"
          alt=""
          className="h-8 w-8 rounded"
        />
        <div className="flex flex-col items-center cursor-pointer">
          <span className="text-sm">Jane Doerr</span>
          <span className="text-xs font-light">jdoerr@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
