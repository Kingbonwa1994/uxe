'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const QuoteForm = () => {
  const callNumber = '0637715945';
  const router = useRouter();
  const { id, service } = router.query || {};

  const [quoteData, setQuoteData] = useState({
    messageContent: '',
    serviceID: '',
    serviceName: '',
  });

  useEffect(() => {
    if (id) {
      setQuoteData((prevData) => ({
        ...prevData,
        serviceID: id,
        serviceName: service,
      }));
    }
  }, [id, service]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuoteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSendWhatsApp = (service) => {
    const encodedMessage = encodeURIComponent(
      `Service ID: ${quoteData.serviceID}\nService Name: ${quoteData.serviceName}\n\n${quoteData.messageContent}`
    );
    const recipientNumber = '+27637715945';
    const whatsappURL = `https://wa.me/${recipientNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="mb-8">
        <div className="text-6xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text">
          1CLIQ
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">
        Request a Quote for {quoteData.serviceName}
      </h2>
      <form className="w-full max-w-lg">
        <div className="mb-4">
          <label className="block font-medium mb-1" htmlFor="budget">
            Budget
          </label>
          <input
            type="text"
            name="budget"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            placeholder="Enter your budget"
          />
        </div>
        <textarea
          name="messageContent"
          value={quoteData.messageContent}
          onChange={handleInputChange}
          placeholder="Enter your message..."
        />
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleSendWhatsApp}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
          >
            Send WhatsApp
          </button>
          <a
            href={`tel:${callNumber}`}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Call
          </a>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;