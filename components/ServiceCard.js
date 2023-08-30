'use client'
import { motion } from "framer-motion";

const ServiceCard = ({ imageUrl, title, description }) => {
  const maxDescriptionLength = 10; // Adjust as needed
  const truncatedDescription =
    description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength) + " ..."
      : description;

  return (
    <div className="service-card p-4 border rounded-md relative shadow-2xl bg-gray-500">
    <motion.img
      whileHover={{ scale: 1, rotate: 10 }}
      whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}

      src={imageUrl} alt={title} className="w-full bg-gray-300 h-auto max-h-40 mb-2" >
      </motion.img>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{truncatedDescription}</p>
      </div>
  );
};

export default ServiceCard;