import { useState } from "react";
import { Gamepad2, Star, TrendingUp, Calendar, Shield, Zap, Headphones, Users, Clock, GamepadIcon, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";

const Index = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleDownloadClick = () => {
    if (user) {
      navigate('/download');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-gray-900/40 backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6 animate-fade-in">
            Senu Cheat Official Community
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
            Your Ultimate Free Fire Cheat Code Database
          </p>
          
          {/* Download Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={handleDownloadClick}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 text-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              <Download className="w-6 h-6 mr-3" />
              Download
            </Button>
            <Button 
              variant="outline" 
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              <Users className="w-6 h-6 mr-3" />
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Free Fire", value: "Premium", icon: Gamepad2 },
            { label: "Cheat Codes", value: "Unlimited", icon: Star },
            { label: "Monthly Users", value: "1.5K", icon: TrendingUp },
            { label: "Last Updated", value: "Today", icon: Calendar }
          ].map((stat, index) => (
            <Card key={index} className="bg-black/60 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-12">
            <Download className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-4">
              Download Senu Cheat Now
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get instant access to the most advanced Free Fire cheat tools. Safe, undetected, and constantly updated.
            </p>
            <Button 
              onClick={handleDownloadClick}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-12 py-4 text-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              <Download className="w-6 h-6 mr-3" />
              Download
            </Button>
            <p className="text-sm text-gray-400 mt-4">
              Compatible with all Free Fire versions • {user ? 'Authorized Access' : 'Login Required'}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Senu Cheat Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Why Choose Senu Cheat?
            </h2>
            <p className="text-xl text-gray-300">
              Our advanced technology and dedication to excellence make us the premier choice for serious Free Fire gamers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-black/60 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Undetected & Safe</h3>
                <p className="text-gray-400">
                  Advanced anti-cheat bypass technology ensures your Free Fire account stays protected while you dominate.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
                <p className="text-gray-400">
                  Optimized performance ensures zero lag and maximum efficiency during your Free Fire gaming sessions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Headphones className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-400">
                  Our dedicated support team is always ready to help you maximize your Free Fire gaming potential.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                100+
              </div>
              <div className="text-gray-400">Free Fire Features</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-black/60 to-gray-900/60 rounded-xl p-12 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Dominate Free Fire?</h3>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of Free Fire players who trust Senu Cheat for their competitive edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleDownloadClick}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 text-lg">
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-blue-500/30">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Senu Cheat Official Community
          </div>
          <p className="text-gray-400 mb-6">
            The most comprehensive Free Fire cheat database on the internet
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a>
            <a href="#" className="hover:text-blue-400 transition-colors">About</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;