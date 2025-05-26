
// Mock data for development - replace with actual Supabase data when connected

export const mockSuppliers = [
  {
    id: "1",
    name: "Green Valley Supplies",
    rating: 4.8,
    products: 25,
    location: "Downtown Market",
    phone: "+27 11 123-4567",
    status: "Active",
    last_order: "2 days ago"
  },
  {
    id: "2", 
    name: "City Foods Wholesale",
    rating: 4.6,
    products: 18,
    location: "Industrial Area",
    phone: "+27 11 234-5678",
    status: "Active",
    last_order: "1 week ago"
  },
  {
    id: "3",
    name: "Fresh Market Co.",
    rating: 4.5,
    products: 32,
    location: "Central District",
    phone: "+27 11 345-6789", 
    status: "Active",
    last_order: "3 days ago"
  }
];

export const mockRecentPrices = [
  {
    id: 1,
    itemName: "Rice (25kg bag)",
    supplier: "Green Valley Supplies",
    price: 2750,
    oldPrice: 2800,
    change: -1.8,
    category: "Grains",
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    itemName: "Cooking Oil (5L)",
    supplier: "City Foods Wholesale", 
    price: 920,
    oldPrice: 850,
    change: 8.2,
    category: "Oils",
    timestamp: "4 hours ago"
  },
  {
    id: 3,
    itemName: "Sugar (2kg)",
    supplier: "Fresh Market Co.",
    price: 180,
    oldPrice: 175,
    change: 2.9,
    category: "Sweeteners",
    timestamp: "6 hours ago"
  },
  {
    id: 4,
    itemName: "Flour (12.5kg)",
    supplier: "Green Valley Supplies",
    price: 420,
    oldPrice: 440,
    change: -4.5,
    category: "Grains", 
    timestamp: "1 day ago"
  }
];
