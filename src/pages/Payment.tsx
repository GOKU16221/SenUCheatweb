import Header from "@/components/Header";
import PaymentCard from "@/components/PaymentCard";
import { Button } from "@/components/ui/button";

const Payment = () => {
  const paymentMethods = [
    {
      name: "PayPal",
      icon: "💳",
      details: {
        email: "rusithoshadha@gmail.com",
        note: "Send payment to this PayPal email address"
      },
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Binance",
      icon: "₿",
      details: {
        userId: "OAKLAN_CRYPT",
        payId: "533554627",
        note: "Use Pay ID for instant transfers"
      },
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/94781516306', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
            Payment Methods
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Choose your preferred payment method
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {paymentMethods.map((method, index) => (
            <PaymentCard
              key={index}
              name={method.name}
              icon={method.icon}
              details={method.details}
              color={method.color}
            />
          ))}
        </div>

        {/* WhatsApp Contact Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help with Payment?</h3>
            <p className="text-gray-300 text-lg mb-6">
              Contact us directly on WhatsApp for payment assistance and support.
            </p>
            <Button 
              onClick={handleWhatsAppContact}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Contact on WhatsApp
            </Button>
          </div>
        </div>

        {/* Payment Instructions */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">Important Instructions</h3>
            <p className="text-gray-300 text-lg">
              After you complete your payment, please DM your receipt to us on WhatsApp or Discord.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;