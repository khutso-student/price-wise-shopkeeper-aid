
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Phone, MapPin, ExternalLink } from "lucide-react";

const TopSuppliers = () => {
  const suppliers = [
    {
      id: 1,
      name: "Green Valley Suppliers",
      rating: 4.8,
      products: 45,
      location: "Market District",
      phone: "+91 98765 43210",
      status: "Active",
      lastOrder: "2 days ago"
    },
    {
      id: 2,
      name: "City Foods Ltd",
      rating: 4.6,
      products: 32,
      location: "Central Hub",
      phone: "+91 87654 32109",
      status: "Active",
      lastOrder: "1 week ago"
    },
    {
      id: 3,
      name: "Sweet Deals Co.",
      rating: 4.4,
      products: 28,
      location: "Trade Center",
      phone: "+91 76543 21098",
      status: "Active",
      lastOrder: "3 days ago"
    }
  ];

  return (
    <Card className="border-orange-200">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-900">Top Suppliers</CardTitle>
            <CardDescription>Your most reliable partners</CardDescription>
          </div>
          <Button variant="outline" size="sm" className="border-orange-200 text-orange-600 hover:bg-orange-50">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {suppliers.map((supplier) => (
            <div key={supplier.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">{supplier.name}</h4>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{supplier.rating}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {supplier.products} products
                    </Badge>
                  </div>
                </div>
                <Badge 
                  variant="default" 
                  className="bg-green-100 text-green-700 hover:bg-green-100"
                >
                  {supplier.status}
                </Badge>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {supplier.location}
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  {supplier.phone}
                </div>
              </div>
              
              <div className="flex justify-between items-center mt-3 pt-3 border-t border-gray-200">
                <span className="text-xs text-gray-500">Last order: {supplier.lastOrder}</span>
                <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                  Contact
                  <ExternalLink className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopSuppliers;
