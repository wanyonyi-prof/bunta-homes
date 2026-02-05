 const ServiceCard = ({ service }) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-accent/20">
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-3 text-primary">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.desc}</p>
      <a
        href="/booking"
        className="inline-flex items-center text-accent font-semibold hover:text-primary transition"
      >
        Learn More →
      </a>
    </div>
  );
};

export default ServiceCard;
