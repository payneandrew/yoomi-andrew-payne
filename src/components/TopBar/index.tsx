const Topbar: React.FC = () => {
  return (
    <div className="p-3 flex justify-between items-center text-black rounded-r-2xl border border-gray-300">
      <span className="mr-2 font-bold text-2xl">Workout</span>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="bg-white bg-opacity-25 px-3 py-2 rounded-full text-sm outline-none"
        />
        {/* <SearchIcon className="h-6 w-6 absolute top-2 right-3 text-white" /> */}
      </div>
      <div className="flex">
        {/* <BellIcon className="h-6 w-6 mx-2 cursor-pointer" /> */}
        <div className="flex items-center cursor-pointer">
          <span className="mr-2">My Account</span>
          {/* <ChevronDownIcon className="h-5 w-5" /> */}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
