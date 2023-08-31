'use client';
import { useRouter, useState } from 'next/navigation';
import ServiceCard from './ServiceCard';

const ServicesGrid = ({ servicesArray }) => {
  const router = useRouter();
    const handleServiceCardClick = (service) => {
    
      router.push({
        pathname: '/quote_form',
        query: { id: service.id, service: service.title, }, // Use "serviceName" instead of "name"
      });
  };

  return (
    <div className="grid bg-gradient-to-br from-green-400 via-green-800 to-green-400 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {servicesArray.map((service) => (
        <div key={service.id}>
          <ServiceCard
            imageUrl={service.image}
            title={service.title}
            description={service.description}
            onClick={() => handleServiceCardClick(service)}
          />
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;