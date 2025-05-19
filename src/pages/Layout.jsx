import { Outlet } from "react-router";
import Header from "../components/Header";
function Layout() {
  return (
    <div className="font-inter min-h-screen w-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-100">
          <Header />
          <Outlet />
    </div>
  );
}

export default Layout;
