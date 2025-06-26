
import Header from "@/components/Header";
import PaymentCard from "@/components/PaymentCard";

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
    },
    {
      name: "Bank Transfer",
      icon: "🏦",
      details: {
        bankName: "Commercial Bank",
        accountNumber: "8740003709",
        accountName: "J P N K FERNANDO",
        branch: "Kochchikade Branch"
      },
      color: "from-green-500 to-green-600"
    }
  ];

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
