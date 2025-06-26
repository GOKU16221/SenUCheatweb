
import Header from "@/components/Header";
import ContactHeader from "@/components/ContactHeader";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 py-20">
        <ContactHeader />

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
