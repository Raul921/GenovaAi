import { useState } from "react";
import Sidebar from "./Sidebar";
import MobileNavbar from "./MobileNavbar";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="drawer lg:drawer-open">
      {/* Mobile drawer checkbox */}
      <input 
        id="drawer-toggle" 
        type="checkbox" 
        className="drawer-toggle" 
        checked={drawerOpen}
        onChange={() => {}}
      />
      
      {/* Page content */}
      <div className="drawer-content flex flex-col">
        {/* Mobile navbar */}
        <MobileNavbar onMenuToggle={toggleDrawer} />
        
        {/* Main content area */}
        <main className="flex-1 p-4 lg:p-6 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
      
      {/* Sidebar menu */}
      <div className="drawer-side">
        <label 
          htmlFor="drawer-toggle" 
          className="drawer-overlay" 
          onClick={toggleDrawer}
        ></label>
        <Sidebar />
      </div>
    </div>
  );
}
