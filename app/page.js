import ServicesGrid from "@/components/ServicesGrid"; // Adjust the path accordingly
import servicesArray from "@/data/services"; // Import your services data

export default function Home() {
  return (
    <main className="bg-gray-900 flex relative flex-col sm:w-full md:w-96 p-14 shadow-md lg:w-full">
      <ServicesGrid servicesArray={servicesArray} />
    </main>
  );
}
