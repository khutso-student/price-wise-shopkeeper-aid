
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Menu, X, BarChart3, Package, Users, Settings, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { icon: Home, label: "Dashboard", path: "/", active: location.pathname === "/" },
    { icon: Package, label: "Products", path: "/products", active: location.pathname === "/products" },
    { icon: Users, label: "Suppliers", path: "/suppliers", active: location.pathname === "/suppliers" },
    { icon: BarChart3, label: "Analytics", path: "/analytics", active: location.pathname === "/analytics" },
    { icon: Settings, label: "Settings", path: "/settings", active: location.pathname === "/settings" },
  ];

  return (
    <nav className="bg-white border-b border-orange-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">PriceWise</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.label}
                variant={item.active ? "default" : "ghost"}
                className={cn(
                  "flex items-center space-x-2",
                  item.active 
                    ? "bg-orange-600 hover:bg-orange-700 text-white" 
                    : "text-gray-600 hover:text-gray-900"
                )}
                asChild
              >
                <Link to={item.path}>
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-orange-600 text-white text-xs flex items-center justify-center">
                3
              </Badge>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-orange-200 py-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  variant={item.active ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start space-x-2",
                    item.active 
                      ? "bg-orange-600 hover:bg-orange-700 text-white" 
                      : "text-gray-600 hover:text-gray-900"
                  )}
                  asChild
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Link to={item.path}>
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
