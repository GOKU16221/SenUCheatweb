import { Check, Crown, Shield, Package, Clock, Headphones, Infinity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";

const Store = () => {
  const navigate = useNavigate();

  const lifetimeProducts = [
    {
      id: 1,
      title: "Supreme-Essential-External",
      price: "Rs. 9,000",
      period: "/one-time",
      features: [
        "Supreme Access",
        "Essential Features", 
        "External Package",
        "Lifetime Access",
        "24/7 Customer Support"
      ],
      popular: true
    },
    {
      id: 2,
      title: "Supreme-Essential",
      price: "Rs. 4,000",
      period: "/one-time",
      features: [
        "Supreme Access",
        "Essential Features",
        "Lifetime Access",
        "24/7 Customer Support"
      ],
      popular: false
    },
    {
      id: 3,
      title: "External",
      price: "Rs. 5,000",
      period: "/one-time",
      features: [
        "External Access",
        "Lifetime Access",
        "24/7 Customer Support"
      ],
      popular: false
    },
    {
      id: 4,
      title: "Supreme",
      price: "Rs. 2,000",
      period: "/one-time",
      features: [
        "Supreme Access",
        "Lifetime Access",
        "24/7 Customer Support"
      ],
      popular: false
    },
    {
      id: 5,
      title: "Essential",
      price: "Rs. 2,000",
      period: "/one-time",
      features: [
        "Essential Features",
        "Lifetime Access",
        "24/7 Customer Support"
      ],
      popular: false
    }
  ];

  const monthlyProducts = [
    {
      id: 1,
      title: "Supreme-Essential-External",
      price: "Rs. 4,500",
      period: "/month",
      features: [
        "Supreme Access",
        "Essential Features", 
        "External Package",
        "Monthly Access",
        "24/7 Customer Support"
      ],
      popular: true
    },
    {
      id: 2,
      title: "Supreme-Essential",
      price: "Rs. 2,000",
      period: "/month",
      features: [
        "Supreme Access",
        "Essential Features",
        "Monthly Access",
        "24/7 Customer Support"
      ],
      popular: false
    },
    {
      id: 3,
      title: "External",
      price: "Rs. 2,500",
      period: "/month",
      features: [
        "External Package",
        "Monthly Access",
        "24/7 Customer Support"
      ],
      popular: false
    },
    {
      id: 4,
      title: "Supreme",
      price: "Rs. 1,000",
      period: "/month",
      features: [
        "Supreme Access",
        "Monthly Access",
        "24/7 Customer Support"
      ],
      popular: false
    },
    {
      id: 5,
      title: "Essential",
      price: "Rs. 1,000",
      period: "/month",
      features: [
        "Essential Features",
        "Monthly Access",
        "24/7 Customer Support"
      ],
      popular: false
    }
  ];

  const weeklyProducts = [
    {
      id: 1,
      title: "Supreme-Essential-External",
      price: "Rs. 1,750",
      period: "/week",
      features: [
        "Supreme Access",
        "Essential Features", 
        "External Package",
        "Weekly Access",
        "24/7 Customer Support"
      ],
      popular: true
    },
    {
      id: 2,
      title: "Supreme-Essential",
      price: "Rs. 1,000",
      period: "/week",
      features: [
        "Supreme Access",
        "Essential Features",
        "Weekly Access",
        "24/7 Customer Support"
      ],
      popular: false
    },
    {
      id: 3,
      title: "External",
      price: "Rs. 1,250",
      period: "/week",
      features: [
        "External Package",
        "Weekly Access",
        "24/7 Customer Support"
      ],
      popular: false
    },
    {
      id: 4,
      title: "Supreme",
      price: "Rs. 500",
      period: "/week",
      features: [
        "Supreme Access",
        "Weekly Access",
        "24/7 Customer Support"
      ],
      popular: false
    },
    {
      id: 5,
      title: "Essential",
      price: "Rs. 500",
      period: "/week",
      features: [
        "Essential Features",
        "Weekly Access",
        "24/7 Customer Support"
      ],
      popular: false
    }
  ];

  const renderProductCards = (products) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <Card key={product.id} className={`bg-black/60 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 relative ${product.popular ? 'ring-2 ring-blue-400' : ''}`}>
          {product.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
                <Crown className="w-4 h-4" />
                <span>Most Popular</span>
              </div>
            </div>
          )}
          
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-bold text-white mb-2">
              {product.title}
            </CardTitle>
            <div className="flex items-baseline justify-center space-x-1">
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {product.price}
              </span>
              <span className="text-gray-400 text-lg">
                {product.period}
              </span>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="space-y-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              onClick={() => navigate('/payment')}
              className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                product.popular 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white' 
                  : 'bg-gradient-to-r from-gray-700 to-gray-600 hover:from-blue-500 hover:to-purple-500 text-white'
              }`}
            >
              Buy Now
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Store
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Premium Free Fire Cheats & Tools - Choose Your Gaming Advantage
          </p>
        </div>

        <Tabs defaultValue="lifetime" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-black/60 border border-blue-500/30">
            <TabsTrigger 
              value="lifetime" 
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-gray-300"
            >
              Lifetime
            </TabsTrigger>
            <TabsTrigger 
              value="monthly"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-gray-300"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger 
              value="weekly"
              className="data-[state=active]:bg-blue-500 data-[state=active]:text-white text-gray-300"
            >
              Weekly
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lifetime">
            {renderProductCards(lifetimeProducts)}
          </TabsContent>

          <TabsContent value="monthly">
            {renderProductCards(monthlyProducts)}
          </TabsContent>

          <TabsContent value="weekly">
            {renderProductCards(weeklyProducts)}
          </TabsContent>
        </Tabs>

        {/* Additional Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-black/60 border border-blue-500/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Our Premium Free Fire Tools?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center space-y-2">
                <Shield className="w-8 h-8 text-green-400" />
                <span className="text-gray-300">100% Undetected</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Clock className="w-8 h-8 text-blue-400" />
                <span className="text-gray-300">Instant Activation</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Headphones className="w-8 h-8 text-purple-400" />
                <span className="text-gray-300">Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
