'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import WhatsAppButton from '@/components/WhatsAppButton';

const QuoteForm = () => {
  const callNumber = '0637715945';
  const router = useRouter();
  const { id, serviceName } = router.query || {};

  const [quoteData, setQuoteData] = useState({
    messageContent: '',
    serviceId: '',
  });

  useEffect(() => {
    if (id) {
      setQuoteData((prevData) => ({
        ...prevData,
        serviceId: id,
        serviceName: service,
      }));
    }
  }, [id, serviceName]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setQuoteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-400">
      <h2 className="text-2xl font-semibold mb-4">
        Request a Quote for {quoteData.serviceName}
      </h2>
      <p>{serviceName}</p>

      {/* Display selected service title */}
      <p className="text-lg mb-2">Selected Service: {quoteData.serviceName}</p>

      {/* Input element for budget */}
      <div className="mb-4">
        <label className="block font-medium mb-1" htmlFor="budget">
          Budget
        </label>
        <input
          type="number"
          id="budget"
          name="budget"
          className="w-full fill-transparent px-4 py-2 border rounded focus:outline-none focus:border-green-500"
          placeholder="Enter your budget"
          required
          value={quoteData.budget}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1" htmlFor="budget">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className="w-full fill-transparent px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          placeholder="location"
          value={quoteData.location}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex justify-center space-x-4">
      <WhatsAppButton
  recipientNumber="+27637715945"
  serviceName={quoteData.serviceName}
  budget={quoteData.budget}
/>
        <a
          href={`tel:${callNumber}`}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Call
        </a>
      </div>
    </div>
  );
};

export default QuoteForm;
