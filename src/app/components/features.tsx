const features = [
  {
    title: "Notion integration",
    description:
      "Work faster and smarter by integrating directly with Notion, right in the app.",
    linkText: "View integration",
    icon: "/icons/dailymotion-brands-solid.svg",
  },
  {
    title: "Slack integration",
    description:
      "Work faster and smarter by integrating directly with Slack, right in the app.",
    linkText: "View integration",
    icon: "/icons/slack-brands-solid.svg",
  },
  {
    title: "Google Drive integration",
    description:
      "Work faster and smarter by integrating directly with Google Drive, right in the app.",
    linkText: "View integration",
    icon: "/icons/google-drive-brands-solid.svg",
  },
  {
    title: "Intercom integration",
    description:
      "Work faster and smarter by integrating directly with Intercom, right in the app.",
    linkText: "View integration",
    icon: "/icons/intercom-brands-solid.svg",
  },
  {
    title: "Jira integration",
    description:
      "Work faster and smarter by integrating directly with Jira, right in the app.",
    linkText: "View integration",
    icon: "/icons/jira-brands-solid.svg",
  },
  {
    title: "Dropbox integration",
    description:
      "Work faster and smarter by integrating directly with Dropbox, right in the app.",
    linkText: "View integration",
    icon: "/icons/dropbox-brands-solid.svg",
  },
];

const Feature = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto text-center px-4">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full mb-4">
          Features
        </span>
        <h2 className="text-3xl font-bold mb-4">
          Get more value from your tools
        </h2>
        <p className="text-lg mb-12">
          Connect your tools, connect your teams. With over 100 apps already
          available in our directory, your team's favourite tools are just a
          click away.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-lg">
              <img
                src={feature.icon}
                alt={`${feature.title} icon`}
                className="h-16 mx-auto mb-4"
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

export default Feature;
