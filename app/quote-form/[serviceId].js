import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import servicesArray from '../../data/services'; // Import your services array

const QuotePage = () => {
  const router = useRouter();
  const { serviceId } = router.query;

  const selectedService = servicesArray.find(service => service.id === parseInt(serviceId));

  const sendWhatsApp = () => {
    // Compose WhatsApp message
    const message = `I'm interested in the ${selectedService.title} service. My budget is $${budget}.`;

    // Replace this with your actual WhatsApp API integration
    const whatsappUrl = `https://api.whatsapp.com/send?phone=1234567890&text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleCall = () => {
    // Replace this with your actual phone number
    const phoneNumber = '1234567890';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Layout>
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold">Get a Quote for {selectedService.title}</h1>
        <div className="mt-4">
          <input
            type="number"
            placeholder="Enter your budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="rounded px-3 py-2 border"
          />
        </div>
        <div className="mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            onClick={sendWhatsApp}
          >
            Send WhatsApp Message
          </button>
          <button className="bg-green-500 ml-4" onClick={handleCall}>
            Call
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default QuotePage;
