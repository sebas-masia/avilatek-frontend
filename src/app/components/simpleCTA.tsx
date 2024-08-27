const SimpleCTA = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto rounded-lg shadow-lg overflow-hidden flex">
        <div className="w-1/2 bg-purple-600 p-10 text-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Give us a shot</h2>
          <p className="text-lg mb-8">
            Join over 4,000+ startups already growing with Untitled.
          </p>
          <div className="flex space-x-4">
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md hover:bg-purple-500">
              Learn more
            </button>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-md hover:bg-gray-200">
              Get started
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://picsum.photos/600/400"
            alt="Team working"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SimpleCTA;
