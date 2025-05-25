
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingUp, TrendingDown, Bell, X } from "lucide-react";

const PriceAlerts = () => {
  const alerts = [
    {
      id: 1,
      product: "Rice (25kg bag)",
      supplier: "Green Valley",
      type: "price_drop",
      message: "Price dropped below your target",
      currentPrice: 2750,
      targetPrice: 2800,
      severity: "success",
      timestamp: "1 hour ago"
    },
    {
      id: 2,
      product: "Cooking Oil (5L)",
      supplier: "City Foods",
      type: "price_spike",
      message: "Significant price increase",
      currentPrice: 920,
      threshold: 900,
      severity: "warning",
      timestamp: "3 hours ago"
    },
    {
      id: 3,
      product: "Sugar (2kg)",
      supplier: "Sweet Deals",
      type: "stock_alert",
      message: "Low stock reported",
      severity: "info",
      timestamp: "6 hours ago"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "success":
        return "bg-green-100 text-green-700 hover:bg-green-100";
      case "warning":
        return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100";
      case "info":
        return "bg-blue-100 text-blue-700 hover:bg-blue-100";
      default:
        return "bg-gray-100 text-gray-700 hover:bg-gray-100";
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "price_drop":
        return <TrendingDown className="h-4 w-4" />;
      case "price_spike":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  return (
    <Card className="border-orange-200">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center">
              <Bell className="h-5 w-5 mr-2 text-orange-600" />
              Price Alerts
            </CardTitle>
            <CardDescription>Important price notifications</CardDescription>
          </div>
          <Badge variant="outline" className="text-orange-600 border-orange-200">
            {alerts.length} active
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {alerts.map((alert) => (
            <div key={alert.id} className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Badge 
                    variant="outline" 
                    className={getSeverityColor(alert.severity)}
                  >
                    {getIcon(alert.type)}
                  </Badge>
                  <span className="font-medium text-sm text-gray-900">{alert.product}</span>
                </div>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-gray-400 hover:text-gray-600">
                  <X className="h-3 w-3" />
                </Button>
              </div>
              
              <p className="text-sm text-gray-600 mb-2">{alert.message}</p>
              
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>{alert.supplier}</span>
                <span>{alert.timestamp}</span>
              </div>
              
              {alert.currentPrice && (
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <span className="text-xs text-gray-600">
                    Current: ₹{alert.currentPrice.toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <Button variant="outline" className="w-full mt-4 border-orange-200 text-orange-600 hover:bg-orange-50">
          Manage Alert Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default PriceAlerts;
