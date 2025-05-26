
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Package, Search, Plus, Edit, Trash2, TrendingUp, TrendingDown } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";
import ProductForm from "@/components/ProductForm";

interface Product {
  id: number;
  name: string;
  category: string;
  currentPrice: number;
  lastPrice: number;
  suppliers: number;
  status: string;
  trend: string;
  change: number;
}

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Rice (25kg bag)",
      category: "Grains",
      currentPrice: 2750,
      lastPrice: 2800,
      suppliers: 5,
      status: "In Stock",
      trend: "down",
      change: -1.8
    },
    {
      id: 2,
      name: "Cooking Oil (5L)",
      category: "Oils",
      currentPrice: 920,
      lastPrice: 880,
      suppliers: 3,
      status: "Low Stock",
      trend: "up",
      change: 4.5
    },
    {
      id: 3,
      name: "Sugar (2kg)",
      category: "Sweeteners",
      currentPrice: 180,
      lastPrice: 175,
      suppliers: 4,
      status: "In Stock",
      trend: "up",
      change: 2.9
    }
  ]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddProduct = (data: any) => {
    const newProduct: Product = {
      id: Date.now(),
      name: data.name,
      category: data.category,
      currentPrice: data.currentPrice,
      lastPrice: data.currentPrice,
      suppliers: data.suppliers,
      status: data.status,
      trend: "stable",
      change: 0
    };
    
    setProducts([...products, newProduct]);
    setIsAddDialogOpen(false);
    toast({
      title: "Product Added",
      description: `${data.name} has been added successfully.`,
    });
  };

  const handleEditProduct = (data: any) => {
    if (!selectedProduct) return;
    
    const updatedProducts = products.map(product =>
      product.id === selectedProduct.id
        ? {
            ...product,
            name: data.name,
            category: data.category,
            currentPrice: data.currentPrice,
            suppliers: data.suppliers,
            status: data.status,
          }
        : product
    );
    
    setProducts(updatedProducts);
    setIsEditDialogOpen(false);
    setSelectedProduct(null);
    toast({
      title: "Product Updated",
      description: `${data.name} has been updated successfully.`,
    });
  };

  const handleDeleteProduct = () => {
    if (!selectedProduct) return;
    
    const updatedProducts = products.filter(product => product.id !== selectedProduct.id);
    setProducts(updatedProducts);
    setIsDeleteDialogOpen(false);
    setSelectedProduct(null);
    toast({
      title: "Product Deleted",
      description: `${selectedProduct.name} has been deleted successfully.`,
    });
  };

  const openEditDialog = (product: Product) => {
    setSelectedProduct(product);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (product: Product) => {
    setSelectedProduct(product);
    setIsDeleteDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Management</h1>
            <p className="text-gray-600">Manage your product catalog and track prices</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-orange-200 focus:border-orange-400"
              />
            </div>
            <Button 
              className="bg-orange-600 hover:bg-orange-700 text-white"
              onClick={() => setIsAddDialogOpen(true)}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900">{product.name}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>
                  </div>
                  <Badge variant="outline" className={
                    product.status === "In Stock" 
                      ? "bg-green-100 text-green-700" 
                      : product.status === "Low Stock"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-red-100 text-red-700"
                  }>
                    {product.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Current Price:</span>
                    <span className="text-lg font-bold text-gray-900">R{product.currentPrice.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Price Change:</span>
                    <div className="flex items-center space-x-1">
                      {product.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-red-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-green-500" />
                      )}
                      <span className={`text-sm font-medium ${
                        product.trend === "up" ? "text-red-500" : "text-green-500"
                      }`}>
                        {product.change > 0 ? '+' : ''}{product.change}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Suppliers:</span>
                    <span className="text-sm text-gray-900">{product.suppliers} active</span>
                  </div>
                  
                  <div className="flex space-x-2 pt-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => openEditDialog(product)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-red-600 hover:text-red-700"
                      onClick={() => openDeleteDialog(product)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add Product Dialog */}
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>
                Fill in the details to add a new product to your catalog.
              </DialogDescription>
            </DialogHeader>
            <ProductForm
              onSubmit={handleAddProduct}
              onCancel={() => setIsAddDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>

        {/* Edit Product Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Product</DialogTitle>
              <DialogDescription>
                Update the product details below.
              </DialogDescription>
            </DialogHeader>
            {selectedProduct && (
              <ProductForm
                product={selectedProduct}
                onSubmit={handleEditProduct}
                onCancel={() => {
                  setIsEditDialogOpen(false);
                  setSelectedProduct(null);
                }}
              />
            )}
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the product "{selectedProduct?.name}" from your catalog.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => {
                setIsDeleteDialogOpen(false);
                setSelectedProduct(null);
              }}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction 
                onClick={handleDeleteProduct}
                className="bg-red-600 hover:bg-red-700"
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Products;
