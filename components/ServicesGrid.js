"use client";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import { useRouter } from "next/navigation";

const ServicesGrid = ({ servicesArray }) => {
  const router = useRouter();

  const handleServiceCardClick = (service) => {
    router.push({
      pathname: "/quote_form", // Replace with the actual path to your QuoteForm
    });
  };
  return (
    <div className="grid bg-gray-600 grid-cols-2 md:grid-cols-3 gap-4">
      {servicesArray.map((service) => (
        <div key={service.id}>
          <Link
            href={{
              pathname: "/quote_form",
            }}
          >
            <ServiceCard
              imageUrl={service.image}
              title={service.title}
              description={service.description}
              onClick={() => handleServiceCardClick(service)}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;
