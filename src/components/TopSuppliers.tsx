// src/components/TopSuppliers.tsx

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Phone, MapPin, ExternalLink } from "lucide-react";
import { supabase } from '@/lib/supabaseClient';

interface Supplier {
  id: string;
  name: string;
  rating: number;
  products: number;
  location: string;
  phone: string;
  status: string;
  last_order: string;
}

const TopSuppliers = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSuppliers() {
      const { data, error } = await supabase
        .from('suppliers')
        .select('*');

      if (error) {
        console.error('Error fetching suppliers:', error);
      } else {
        setSuppliers(data as Supplier[] || []);
      }
      setLoading(false);
    }

    fetchSuppliers();
  }, []);

  if (loading) return <div>Loading suppliers...</div>;

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
                <span className="text-xs text-gray-500">Last order: {supplier.last_order}</span>
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
