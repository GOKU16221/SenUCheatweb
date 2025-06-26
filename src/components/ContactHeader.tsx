
import SocialMediaButtons from "./SocialMediaButtons";

const ContactHeader = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-6">
        Contact Us
      </h1>
      <p className="text-xl text-gray-300 mb-8">
        Get in Touch With Our Team
      </p>
      
      <SocialMediaButtons />
    </div>
  );
};

export default ContactHeader;
