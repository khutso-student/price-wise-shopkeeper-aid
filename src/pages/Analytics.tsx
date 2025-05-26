
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Package, Calendar } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const Analytics = () => {
  const priceData = [
    { month: 'Jan', rice: 2800, oil: 850, sugar: 170 },
    { month: 'Feb', rice: 2750, oil: 880, sugar: 175 },
    { month: 'Mar', rice: 2900, oil: 920, sugar: 180 },
    { month: 'Apr', rice: 2850, oil: 900, sugar: 185 },
    { month: 'May', rice: 2750, oil: 920, sugar: 180 },
  ];

  const supplierData = [
    { name: 'Green Valley', orders: 45, value: 125000 },
    { name: 'City Foods', orders: 32, value: 89000 },
    { name: 'Fresh Market', orders: 28, value: 76000 },
    { name: 'Quality Supplies', orders: 22, value: 62000 },
  ];

  const insights = [
    {
      title: "Best Price Trend",
      description: "Rice prices decreased by 5.4% this month",
      icon: TrendingDown,
      type: "positive",
      value: "-5.4%"
    },
    {
      title: "Price Alert",
      description: "Cooking oil prices increased significantly",
      icon: TrendingUp,
      type: "warning",
      value: "+4.5%"
    },
    {
      title: "Top Supplier",
      description: "Green Valley offers best overall value",
      icon: Package,
      type: "info",
      value: "R125k"
    },
    {
      title: "Monthly Savings",
      description: "Saved R15,750 through price tracking",
      icon: DollarSign,
      type: "positive",
      value: "R15.7k"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Price Analytics</h1>
            <p className="text-gray-600">Analyze price trends and supplier performance</p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
              <Calendar className="h-4 w-4 mr-2" />
              Last 30 Days
            </Button>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              <BarChart3 className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {insights.map((insight, index) => (
            <Card key={index} className="border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <insight.icon className={`h-5 w-5 ${
                    insight.type === 'positive' ? 'text-green-600' :
                    insight.type === 'warning' ? 'text-yellow-600' :
                    'text-orange-600'
                  }`} />
                  <Badge variant="outline" className={
                    insight.type === 'positive' ? 'bg-green-100 text-green-700' :
                    insight.type === 'warning' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-orange-100 text-orange-700'
                  }>
                    {insight.value}
                  </Badge>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{insight.title}</h3>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle>Price Trends</CardTitle>
              <CardDescription>Monthly price changes for key products</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="rice" stroke="#ea580c" strokeWidth={2} />
                  <Line type="monotone" dataKey="oil" stroke="#f59e0b" strokeWidth={2} />
                  <Line type="monotone" dataKey="sugar" stroke="#84cc16" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle>Supplier Performance</CardTitle>
              <CardDescription>Order volume by supplier</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={supplierData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="orders" fill="#ea580c" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analysis */}
        <Card className="border-orange-200">
          <CardHeader>
            <CardTitle>Market Analysis</CardTitle>
            <CardDescription>Detailed insights and recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Price Volatility</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Rice</span>
                    <Badge variant="outline" className="bg-green-100 text-green-700">Low</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cooking Oil</span>
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-700">Medium</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Sugar</span>
                    <Badge variant="outline" className="bg-red-100 text-red-700">High</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Best Deals</h4>
                <div className="space-y-2">
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Rice (25kg)</div>
                    <div className="text-gray-600">Green Valley - R2,750</div>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">Sugar (2kg)</div>
                    <div className="text-gray-600">City Foods - R180</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Recommendations</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Stock up on rice while prices are low</p>
                  <p>• Monitor oil prices for further increases</p>
                  <p>• Consider alternative sugar suppliers</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
