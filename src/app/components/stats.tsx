const Stats = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Unleash the full power of data
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Everything you need to convert, engage, and retain more users.
        </p>

        <div className="bg-gray-50 rounded-lg shadow-lg p-8 flex justify-around items-center">
          <div className="text-center">
            <span className="text-4xl font-bold text-purple-600">400+</span>
            <p className="text-gray-600 mt-2">Projects completed</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-purple-600">600%</span>
            <p className="text-gray-600 mt-2">Return on investment</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-purple-600">10k</span>
            <p className="text-gray-600 mt-2">Global downloads</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
