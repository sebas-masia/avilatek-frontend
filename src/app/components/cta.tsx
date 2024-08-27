const CTA = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">
            No long-term contracts. No catches.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Start your 30-day free trial today.
          </p>
          <div className="flex space-x-4">
            <button className="bg-transparent border border-gray-400 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
              Learn more
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
              Get started
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative flex justify-center items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="transform translate-x-12 translate-y-2">
              <img
                src="https://picsum.photos/300/300"
                alt="Person 1"
                className="w-40 h-40 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="transform translate-x-12 -translate-y-6">
              <img
                src="https://picsum.photos/400/300"
                alt="Person 2"
                className="w-40 h-60 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="transform -translate-y-10">
              <img
                src="https://picsum.photos/500/300"
                alt="Person 3"
                className="w-40 h-40 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="transform -translate-x-2 -translate-y-6">
              <img
                src="https://picsum.photos/200/300"
                alt="Person 4"
                className="w-40 h-60 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="absolute right-0 top-1/2 transform translate-x-5">
            <img
              src="https://picsum.photos/450/300"
              alt="Person 5"
              className="w-40 h-40 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
