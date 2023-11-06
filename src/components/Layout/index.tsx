import Sidebar from "../SideBar";
import Topbar from "../TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="flex h-full"
      style={{
        background:
          "linear-gradient(0deg, rgba(7, 103, 135, 0.05) 0%, rgba(7, 103, 135, 0.05) 100%), #FFF",
      }}
    >
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="px-6 pt-3">
          <Topbar />
        </div>
        <div className="overflow-y-scroll">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
