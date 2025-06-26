
import { useState } from "react";
import { Users, Crown, Shield, Zap, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";

const Guild = () => {
  const [formData, setFormData] = useState({
    inGameName: "",
    email: "",
    experience: "",
    reason: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Guild application submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Senu Free Fire Guild
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join Our Elite Gaming Community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Guild Application Form */}
          <Card className="bg-black/40 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center space-x-2">
                <Crown className="w-6 h-6 text-yellow-400" />
                <span>Apply to Join</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="inGameName" className="text-gray-300">In-game Name</Label>
                  <Input
                    id="inGameName"
                    name="inGameName"
                    type="text"
                    placeholder="Your Free Fire username"
                    value={formData.inGameName}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="primaryGame" className="text-gray-300">Primary Game</Label>
                  <div className="bg-gray-800/50 border border-blue-500/30 rounded-md p-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-white font-medium">Free Fire</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Currently only accepting Free Fire players</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-gray-300">Gaming Experience</Label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-blue-500/30 text-white rounded-md p-3 focus:border-blue-400 focus:outline-none"
                    required
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner (0-6 months)</option>
                    <option value="intermediate">Intermediate (6 months - 2 years)</option>
                    <option value="advanced">Advanced (2+ years)</option>
                    <option value="professional">Professional/Competitive</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-gray-300">Why do you want to join?</Label>
                  <Textarea
                    id="reason"
                    name="reason"
                    placeholder="Tell us why you want to join the Senu Free Fire Guild..."
                    value={formData.reason}
                    onChange={handleInputChange}
                    className="bg-gray-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400 min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 text-lg font-semibold transition-all duration-300"
                >
                  <Users className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Guild Benefits */}
          <div className="space-y-8">
            <Card className="bg-black/40 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Guild Benefits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-green-400" />
                  <div>
                    <h4 className="text-white font-semibold">Premium Protection</h4>
                    <p className="text-gray-400 text-sm">Advanced anti-ban protection for all members</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  <div>
                    <h4 className="text-white font-semibold">Exclusive Cheats</h4>
                    <p className="text-gray-400 text-sm">Access to guild-only cheat features</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 text-purple-400" />
                  <div>
                    <h4 className="text-white font-semibold">Weekly Tournaments</h4>
                    <p className="text-gray-400 text-sm">Compete with guild members for prizes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-400" />
                  <div>
                    <h4 className="text-white font-semibold">Active Community</h4>
                    <p className="text-gray-400 text-sm">Connect with skilled Free Fire players</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-500/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4">Guild Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      500+
                    </div>
                    <div className="text-gray-400 text-sm">Active Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      #1
                    </div>
                    <div className="text-gray-400 text-sm">Regional Rank</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      95%
                    </div>
                    <div className="text-gray-400 text-sm">Win Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                      24/7
                    </div>
                    <div className="text-gray-400 text-sm">Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guild;
