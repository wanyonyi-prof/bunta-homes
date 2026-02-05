import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { 
  Home, 
  Wrench, 
  Building, 
  Users, 
  Phone,
  ChevronDown,
  FileText,
  HardHat,
  Truck
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [activeMega, setActiveMega] = useState(null);

  const navItems = [
    { 
      path: "/", 
      label: "Home", 
      icon: Home 
    },
    { 
      label: "Services", 
      icon: Wrench,
      megaMenu: true,
      sections: [
        {
          title: "Engineering",
          items: [
            { path: "/services/structural", label: "Structural Design", icon: HardHat },
            { path: "/services/foundation", label: "Foundation Engineering", icon: Building },
          ]
        },
        {
          title: "Construction",
          items: [
            { path: "/services/supervision", label: "Site Supervision", icon: Users },
            { path: "/services/materials", label: "Materials Supply", icon: Truck },
          ]
        }
      ]
    },
    { 
      path: "/projects", 
      label: "Projects", 
      icon: Building 
    },
    { 
      path: "/contact", 
      label: "Contact", 
      icon: Phone 
    },
  ];

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center space-x-1">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          const isMegaMenu = item.megaMenu;
          const isMegaOpen = activeMega === index;

          if (isMegaMenu) {
            return (
              <li 
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveMega(index)}
                onMouseLeave={() => setActiveMega(null)}
              >
                <button
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isMegaOpen || isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMegaOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isMegaOpen && (
                  <div className="absolute top-full left-0 mt-1 w-[600px] bg-white rounded-xl shadow-2xl border border-gray-200 p-6 z-50">
                    <div className="grid grid-cols-2 gap-8">
                      {item.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h3 className="text-sm font-semibold text-gray-900 mb-4 pb-2 border-b">
                            {section.title}
                          </h3>
                          <div className="space-y-3">
                            {section.items.map((subItem) => {
                              const SubIcon = subItem.icon;
                              return (
                                <Link
                                  key={subItem.path}
                                  to={subItem.path}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                                  onClick={() => setActiveMega(null)}
                                >
                                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200">
                                    <SubIcon className="h-4 w-4 text-blue-600" />
                                  </div>
                                  <div>
                                    <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                      {subItem.label}
                                    </div>
                                    <div className="text-xs text-gray-500">
                                      Professional services
                                    </div>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <Link
                        to="/services"
                        className="flex items-center justify-center w-full py-3 bg-blue-50 text-blue-600 rounded-lg font-medium hover:bg-blue-100 transition-colors"
                        onClick={() => setActiveMega(null)}
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                )}
              </li>
            );
          }

          return (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;