import { useState } from "react";
import { Download as DownloadIcon, Shield, Zap, Star, CheckCircle, AlertCircle, Key } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";

const Download = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { user } = useAuth();

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download process
    setTimeout(() => {
      window.open('https://login.regzcheat.org/portal/SenuCheat/SenuCheat', '_blank');
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      
      {/* User Info Section */}
      {user && (
        <section className="px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Welcome back, {user.username}!</h2>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">Subscription: {user.subscription || 'Free'}</span>
                      </div>
                      {user.expiredate && (
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="w-4 h-4 text-blue-400" />
                          <span className="text-gray-300">Expires: {new Date(user.expiredate).toLocaleDateString()}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">User ID</div>
                    <div className="text-lg font-mono text-white">{user.id}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      )}
      
      {/* Hero Section */}
      <section className="relative px-4 py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-gray-900/60 backdrop-blur-sm"></div>
        <div className="relative max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <DownloadIcon className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-green-500 bg-clip-text text-transparent mb-6">
              Download Senu Cheat
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-medium">
              Get instant access to the most advanced Free Fire cheat tools
            </p>
          </div>

          {/* Password Section */}
          <Card className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 max-w-md mx-auto mb-8">
            <CardContent className="p-6 text-center">
              <Key className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white mb-2">Access Password</h3>
              <div className="bg-black/50 border border-yellow-500/30 rounded-lg p-4">
                <span className="text-2xl font-mono font-bold text-yellow-400">VOID</span>
              </div>
              <p className="text-sm text-gray-300 mt-2">Use this password when prompted</p>
            </CardContent>
          </Card>

          {/* Download Card */}
          <Card className="bg-gray-800/90 border border-green-500/50 max-w-2xl mx-auto mb-12 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-4">Senu Cheat v2.0</h2>
                <div className="flex justify-center items-center space-x-4 text-sm text-gray-200 mb-6">
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="font-medium">Safe & Undetected</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="font-medium">Latest Version</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="font-medium">Authorized User</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 text-xl font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                {isDownloading ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                    Preparing Download...
                  </>
                ) : (
                  <>
                    <DownloadIcon className="w-6 h-6 mr-3" />
                    Download Now
                  </>
                )}
              </Button>
              
              <p className="text-sm text-gray-200 mt-4 text-center font-medium">
                File size: ~15MB • Compatible with Windows 10/11
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-200 font-medium">
              Everything you need to dominate Free Fire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/80 border-blue-500/50 hover:border-blue-400/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Anti-Ban Protection</h3>
                <p className="text-gray-200">
                  Advanced protection system keeps your account safe from detection.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/80 border-blue-500/50 hover:border-blue-400/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Premium Features</h3>
                <p className="text-gray-200">
                  Aimbot, ESP, Speed Hack, and 100+ other premium features included.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/80 border-blue-500/50 hover:border-blue-400/70 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <Star className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Regular Updates</h3>
                <p className="text-gray-200">
                  Constantly updated to work with the latest Free Fire versions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800/80 border-blue-500/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">System Requirements</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-400 mb-4">Minimum Requirements</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Windows 10 64-bit</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>4GB RAM</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>DirectX 11 compatible</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Internet connection required</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-4">Recommended</h4>
                  <ul className="space-y-2 text-gray-200">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>Windows 11 64-bit</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>8GB RAM or more</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>Dedicated graphics card</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span>Stable internet connection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Important Notice Section at Bottom */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-orange-100/90 to-red-100/90 border border-orange-300/50">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Important Notice</h3>
                  <p className="text-gray-700 mb-4">
                    Please use this software responsibly. While our cheat includes advanced anti-detection features, 
                    we recommend using it in moderation to ensure the best gaming experience for everyone.
                  </p>
                  <p className="text-sm text-gray-600">
                    By downloading and using this software, you acknowledge that you understand the risks involved 
                    and agree to use it at your own discretion.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Download;