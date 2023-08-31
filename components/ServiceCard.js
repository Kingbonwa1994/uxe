"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const ServiceCard = ({ id, imageUrl, title, description }) => {
  const maxDescriptionLength = 10; // Adjust as needed
  const truncatedDescription =
    description.length > maxDescriptionLength
      ? description.substring(0, maxDescriptionLength) + " ..."
      : description;

  return (
    <Link href={`/quote_form?id=${id}&service=${encodeURIComponent(title)}`}>
      <div className="group service-card p-4 border-[green-900] rounded-md relative shadow-2xl bg-gradient-to-br from-green-200 via-green-700 to-green-200 transform transition-transform duration-300 ease-out hover:scale-110">
        <motion.img
          whileHover={{ scale: 0.7, rotate: 10 }}
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
          src={imageUrl}
          alt={title}
          className="w-full bg-inherit h-auto max-h-40 mb-2"
        ></motion.img>
        <h3 className="text-lg font-semibold mb-2 text-purple-950">{title}</h3>
        <p className="text-black">{truncatedDescription}</p>
      </div>
    </Link>
  );
};

export default ServiceCard;
