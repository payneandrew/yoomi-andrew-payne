import Sidebar from "../SideBar";
import Topbar from "../TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Topbar />
        <div className="h-full overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
