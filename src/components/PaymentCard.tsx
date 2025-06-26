
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface PaymentDetails {
  [key: string]: string;
}

interface PaymentCardProps {
  name: string;
  icon: string;
  details: PaymentDetails;
  color: string;
}

const PaymentCard = ({ name, icon, details, color }: PaymentCardProps) => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${label} copied successfully`,
    });
  };

  const formatLabel = (key: string) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  };

  return (
    <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
      <CardHeader className="text-center">
        <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-2xl mb-4`}>
          {icon}
        </div>
        <CardTitle className="text-white text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {Object.entries(details).map(([key, value]) => {
          if (key === 'note') {
            return (
              <div key={key} className="text-sm text-gray-400 italic text-center pt-2 border-t border-gray-700">
                {value}
              </div>
            );
          }
          
          return (
            <div key={key} className="space-y-1">
              <label className="text-sm text-gray-400 font-medium">
                {formatLabel(key)}:
              </label>
              <div className="flex items-center justify-between bg-gray-900/50 p-3 rounded-lg">
                <span className="text-white font-mono text-sm break-all">
                  {value}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(value, formatLabel(key))}
                  className="ml-2 h-8 w-8 p-0 hover:bg-purple-500/20"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default PaymentCard;
