import { NavLink } from "@remix-run/react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
            Tomislav Matijević
          </NavLink>
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600 transition-colors"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600 transition-colors"
                }`
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/what-can-i-do"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600 transition-colors"
                }`
              }
            >
              What Can I Do?
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
