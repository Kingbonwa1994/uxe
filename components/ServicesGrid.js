import ServiceCard from "./ServiceCard";
import Link from "next/link";
import servicesArray from "@/data/services";


const ServicesGrid = () => {

  return (
    <div className="grid bg-gray-600 grid-cols-2 md:grid-cols-3 gap-4">
      {servicesArray.forEach((service) => (
        <div key={service.id}>
          <Link href={`/quote/${service.id}`}>
            <ServiceCard
              imageUrl={service.image}
              title={service.title}
              description={service.description}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ServicesGrid;






