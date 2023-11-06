import Sidebar from "../SideBar";
import Topbar from "../TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div
      className="flex h-full overflow-y-scroll"
      style={{
        background:
          "linear-gradient(0deg, rgba(7, 103, 135, 0.05) 0%, rgba(7, 103, 135, 0.05) 100%), #FFF",
      }}
    >
      <Sidebar />
      <div className="w-full">
        <Topbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
