const advancedFeatures = [
  {
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    linkText: "Learn more",
    icon: "/icons/message-solid.svg",
  },
  {
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    linkText: "Learn more",
    icon: "/icons/bolt-solid.svg",
  },
  {
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple of clicks.",
    linkText: "Learn more",
    icon: "/icons/flag-solid.svg",
  },
];

const AdvancedFeatures = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto text-center px-4">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full mb-4">
          Features
        </span>
        <h2 className="text-3xl font-bold mb-4">
          Cutting-edge features for advanced analytics
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advancedFeatures.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <img
                src={feature.icon}
                alt={`${feature.title} icon`}
                className="h-12 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a
                href="#"
                className="text-purple-600 font-medium hover:underline"
              >
                {feature.linkText} <span aria-hidden="true">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvancedFeatures;
