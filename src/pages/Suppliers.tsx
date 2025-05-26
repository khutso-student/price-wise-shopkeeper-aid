
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Users, Search, Plus, Phone, MapPin, Mail, Star } from "lucide-react";

const Suppliers = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const suppliers = [
    {
      id: 1,
      name: "Green Valley Suppliers",
      contact: "John Mthembu",
      phone: "+27 11 123 4567",
      email: "john@greenvalley.co.za",
      location: "Johannesburg, GP",
      rating: 4.8,
      products: 25,
      status: "Active",
      lastOrder: "2024-05-20"
    },
    {
      id: 2,
      name: "City Foods Distribution",
      contact: "Sarah Adams",
      phone: "+27 21 987 6543",
      email: "sarah@cityfoods.co.za",
      location: "Cape Town, WC",
      rating: 4.5,
      products: 18,
      status: "Active",
      lastOrder: "2024-05-18"
    },
    {
      id: 3,
      name: "Fresh Market Co",
      contact: "Peter Nkomo",
      phone: "+27 31 555 1234",
      email: "peter@freshmarket.co.za",
      location: "Durban, KZN",
      rating: 4.2,
      products: 32,
      status: "Inactive",
      lastOrder: "2024-04-15"
    }
  ];

  const filteredSuppliers = suppliers.filter(supplier =>
    supplier.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    supplier.contact.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Supplier Network</h1>
            <p className="text-gray-600">Manage your supplier relationships and contacts</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search suppliers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-orange-200 focus:border-orange-400"
              />
            </div>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Supplier
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSuppliers.map((supplier) => (
            <Card key={supplier.id} className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">{supplier.name}</CardTitle>
                    <CardDescription>Contact: {supplier.contact}</CardDescription>
                  </div>
                  <Badge variant={supplier.status === "Active" ? "default" : "secondary"} 
                         className={supplier.status === "Active" 
                           ? "bg-green-100 text-green-700" 
                           : "bg-gray-100 text-gray-700"}>
                    {supplier.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{supplier.rating}</span>
                      <span className="text-sm text-gray-500">({supplier.products} products)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{supplier.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span>{supplier.email}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{supplier.location}</span>
                    </div>
                  </div>
                  
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-gray-500">Last order: {supplier.lastOrder}</span>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 border-orange-200 text-orange-600 hover:bg-orange-50">
                        Contact
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        View Products
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
