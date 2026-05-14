import { Code, Palette, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Building fast and modern websites for your business.",
      icon: <Code size={40} />,
    },
    {
      title: "UI/UX Design",
      desc: "Designing user-friendly and beautiful interfaces.",
      icon: <Palette size={40} />,
    },
    {
      title: "Mobile App Development",
      desc: "Creating powerful mobile applications.",
      icon: <Smartphone size={40} />,
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto text-center">

      <h1 className="text-4xl font-bold mb-12">Our Services</h1>

      <div className="grid md:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-gray-900 border border-gray-700 p-8 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
          >

            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition"></div>

            {/* Icon */}
            <div className="mb-4 text-blue-400 group-hover:scale-110 transition">
              {service.icon}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-2">
              {service.title}
            </h2>

            {/* Description */}
            <p className="text-gray-400">
              {service.desc}
            </p>

<p className="text-gray-400 mb-10">
  We provide high quality services for your business
</p>

          </div>
        ))}

      </div>

    </div>
  );
}