
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Bell, Menu, X, BarChart3, Package, Users, Settings, Home, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { icon: Home, label: "Dashboard", path: "/", active: location.pathname === "/" },
    { icon: Package, label: "Products", path: "/products", active: location.pathname === "/products" },
    { icon: Users, label: "Suppliers", path: "/suppliers", active: location.pathname === "/suppliers" },
    { icon: BarChart3, label: "Analytics", path: "/analytics", active: location.pathname === "/analytics" },
    { icon: Settings, label: "Settings", path: "/settings", active: location.pathname === "/settings" },
  ];

  const notifications = [
    {
      id: 1,
      type: "price_drop",
      title: "Price Drop Alert",
      message: "Rice (25kg) dropped to R2,750",
      time: "2 hours ago",
      icon: TrendingDown,
      color: "text-green-600"
    },
    {
      id: 2,
      type: "price_spike",
      title: "Price Increase",
      message: "Cooking Oil (5L) increased to R920",
      time: "4 hours ago",
      icon: TrendingUp,
      color: "text-red-600"
    },
    {
      id: 3,
      type: "stock_alert",
      title: "Low Stock Alert",
      message: "Sugar (2kg) running low at Sweet Deals",
      time: "6 hours ago",
      icon: AlertTriangle,
      color: "text-yellow-600"
    }
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
            <Popover open={isNotificationOpen} onOpenChange={setIsNotificationOpen}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5 text-gray-600" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-orange-600 text-white text-xs flex items-center justify-center">
                    {notifications.length}
                  </Badge>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="end">
                <div className="p-4 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-900">Notifications</h3>
                  <p className="text-sm text-gray-600">{notifications.length} unread notifications</p>
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div key={notification.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className={`p-1 rounded-full ${notification.color}`}>
                          <notification.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                          <p className="text-sm text-gray-600 truncate">{notification.message}</p>
                          <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-gray-200">
                  <Button 
                    variant="outline" 
                    className="w-full text-orange-600 border-orange-200 hover:bg-orange-50"
                    onClick={() => setIsNotificationOpen(false)}
                  >
                    View All Notifications
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

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
