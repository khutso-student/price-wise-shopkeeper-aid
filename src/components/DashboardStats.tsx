
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Users, Package, DollarSign, AlertTriangle } from "lucide-react";

const DashboardStats = () => {
  const stats = [
    {
      title: "Total Products",
      value: "247",
      change: "+12%",
      changeType: "increase",
      icon: Package,
      description: "Products tracked"
    },
    {
      title: "Active Suppliers",
      value: "18",
      change: "+2",
      changeType: "increase",
      icon: Users,
      description: "Supplier partners"
    },
    {
      title: "Avg. Price Change",
      value: "-3.2%",
      change: "This week",
      changeType: "decrease",
      icon: DollarSign,
      description: "Price movement"
    },
    {
      title: "Price Alerts",
      value: "7",
      change: "Active",
      changeType: "neutral",
      icon: AlertTriangle,
      description: "Requires attention"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="border-orange-200 hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {stat.value}
            </div>
            <div className="flex items-center space-x-2">
              <Badge 
                variant={stat.changeType === "increase" ? "default" : stat.changeType === "decrease" ? "destructive" : "secondary"}
                className={
                  stat.changeType === "increase" 
                    ? "bg-green-100 text-green-700 hover:bg-green-100" 
                    : stat.changeType === "decrease" 
                    ? "bg-red-100 text-red-700 hover:bg-red-100"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-100"
                }
              >
                {stat.changeType === "increase" && <TrendingUp className="h-3 w-3 mr-1" />}
                {stat.changeType === "decrease" && <TrendingDown className="h-3 w-3 mr-1" />}
                {stat.change}
              </Badge>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
