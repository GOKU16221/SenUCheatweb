
import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <Card className="bg-black/40 border-blue-500/30">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">support@senucheat.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span className="text-gray-300">Online Support 24/7</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-black/40 border-blue-500/30">
        <CardContent className="p-8">
          <h3 className="text-xl font-bold text-white mb-4">Support Hours</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex justify-between">
              <span>Monday - Friday:</span>
              <span>24/7</span>
            </div>
            <div className="flex justify-between">
              <span>Saturday - Sunday:</span>
              <span>24/7</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Our support team is available around the clock to help you with any questions or issues.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
