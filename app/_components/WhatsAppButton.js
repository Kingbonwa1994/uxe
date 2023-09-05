import React from 'react';

const WhatsAppButton = ({ recipientNumber, serviceName, budget }) => {
  const handleSendWhatsApp = () => {
    const message = `Service: ${serviceName}\nBudget: ${budget}\nLocation: ${location}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${recipientNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <button
      onClick={handleSendWhatsApp}
      className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
    >
      Send WhatsApp
    </button>
  );
};
export default WhatsAppButton;
