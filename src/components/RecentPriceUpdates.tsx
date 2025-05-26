import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, MoreHorizontal, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { mockRecentPrices } from "@/lib/mockData";

const RecentPriceUpdates = () => {
  const [priceUpdates, setPriceUpdates] = useState<any[]>([]);

  useEffect(() => {
    // Simulate API call with mock data
    setTimeout(() => {
      setPriceUpdates(mockRecentPrices);
    }, 300);
  }, []);

  const formatCurrency = (amount: number) => {
    return `R${amount.toLocaleString()}`;
  };

  return (
    <Card className="border-orange-200">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">Recent Price Updates</CardTitle>
            <CardDescription>Latest price changes from your suppliers</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="border-orange-200 text-orange-600 hover:bg-orange-50" asChild>
            <Link to="/products">
              View All
              <ExternalLink className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {priceUpdates.map((update) => (
            <div key={update.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{update.itemName}</h4>
                  <Badge variant="outline" className="text-xs">
                    {update.category || "General"}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{update.supplier}</p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-500">
                    {formatCurrency(update.oldPrice)} → {formatCurrency(update.price)}
                  </span>
                  <Badge
                    variant={update.change < 0 ? "default" : "destructive"}
                    className={
                      update.change < 0
                        ? "bg-green-100 text-green-700 hover:bg-green-100"
                        : "bg-red-100 text-red-700 hover:bg-red-100"
                    }
                  >
                    {update.change < 0 ? <TrendingDown className="h-3 w-3 mr-1" /> : <TrendingUp className="h-3 w-3 mr-1" />}
                    {Math.abs(update.change || 0)}%
                  </Badge>
                  <span className="text-gray-400">{update.timestamp || "N/A"}</span>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="ml-4">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentPriceUpdates;
