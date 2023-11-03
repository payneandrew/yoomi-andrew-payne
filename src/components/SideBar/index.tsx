import { DashboardIcon } from "../icons/DashboardIcon";
import { LogoutIcon } from "../icons/LogoutIcon";
import { MessagesIcon } from "../icons/MessagesIcon";
import { SettingIcon } from "../icons/SettingIcon";
import { TrendsIcon } from "../icons/TrendsIcon";
import { WorkoutCalendarIcon } from "../icons/WorkoutCalendarIcon";
import { YoomiLogo } from "../icons/YoomiLogo";

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen bg-deep-blue w-64 absolute sm:relative font-inter-font rounded-r-2xl flex flex-col justify-between">
      <div>
        <div className="flex justify-center mt-10">
          <YoomiLogo />
        </div>
        <nav className="text-white text-base font-medium pt-3">
          <div>
            <a
              href="/"
              className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
            >
              <DashboardIcon />
              <span className="ml-2">Dashboard</span>
            </a>
            <a
              href="/"
              className="flex items-center text-white py-4 pl-6 nav-item"
            >
              <TrendsIcon />
              <span className="ml-2">Trends</span>
            </a>
            <a
              href="/"
              className="flex items-center text-white py-4 pl-6 nav-item"
            >
              <WorkoutCalendarIcon />
              <span className="ml-2">Workout Calendar</span>
            </a>
            <a
              href="/"
              className="flex items-center text-white py-4 pl-6 nav-item"
            >
              <MessagesIcon />
              <span className="ml-2">Messages</span>
            </a>
          </div>
        </nav>
      </div>
      <div>
        <div>
          <a
            href="/"
            className="flex items-center active-nav-link text-white py-4 pl-6 nav-item"
          >
            <SettingIcon />
            <span className="ml-2">Dashboard</span>
          </a>
          <a
            href="/"
            className="flex items-center text-white py-4 pl-6 nav-item"
          >
            <LogoutIcon />
            <span className="ml-2">Trends</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
