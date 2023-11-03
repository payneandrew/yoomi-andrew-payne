import { DashboardIcon } from "../icons/DashboardIcon";
import { MessagesIcon } from "../icons/MessagesIcon";
import { TrendsIcon } from "../icons/TrendsIcon";
import { WorkoutCalendarIcon } from "../icons/WorkoutCalendarIcon";
import { YoomiLogo } from "../icons/YoomiLogo";

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen bg-deep-blue w-64 absolute sm:relative font-inter-font rounded-r-2xl">
      <div className="flex justify-center mt-10">
        <YoomiLogo />
      </div>
      <nav className="text-white text-base font-medium pt-3">
        <a
          href="/"
          className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
        >
          <DashboardIcon />
          <span className="ml-2">Dashboard</span>
        </a>
        <a href="/" className="flex items-center text-white py-4 pl-6 nav-item">
          <TrendsIcon />
          <span className="ml-2">Trends</span>
        </a>
        <a href="/" className="flex items-center text-white py-4 pl-6 nav-item">
          <WorkoutCalendarIcon />
          <span className="ml-2">Workout Calendar</span>
        </a>
        <a href="/" className="flex items-center text-white py-4 pl-6 nav-item">
          <MessagesIcon />
          <span className="ml-2">Messages</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
