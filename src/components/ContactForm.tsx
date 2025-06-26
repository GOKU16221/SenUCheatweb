
import { useState } from "react";
import { Send, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission here
  };

  return (
    <Card className="bg-black/40 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white flex items-center space-x-2">
          <Mail className="w-6 h-6 text-blue-400" />
          <span>Send us a Message</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
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
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleInputChange}
              className="bg-gray-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject" className="text-gray-300">Subject</Label>
            <Input
              id="subject"
              name="subject"
              type="text"
              placeholder="What is this about?"
              value={formData.subject}
              onChange={handleInputChange}
              className="bg-gray-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-gray-300">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us more about your inquiry..."
              value={formData.message}
              onChange={handleInputChange}
              className="bg-gray-800/50 border-blue-500/30 text-white placeholder:text-gray-400 focus:border-blue-400 min-h-[120px]"
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-3 text-lg font-semibold transition-all duration-300"
          >
            <Send className="w-5 h-5 mr-2" />
            Submit Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
