import { NavLink } from "@remix-run/react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink 
              to="/"
              className={({ isActive }) =>
                `text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "bg-gray-100" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "bg-gray-100" : ""
                }`
              }
            >
              Projects
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}; 