const Hero = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="bg-purple-600 text-white max-w-5xl w-full mx-4 min-h-[500px] md:mx-0 rounded-lg p-10 text-center shadow-lg flex flex-col items-center justify-center gap-5">
        <h1 className="text-5xl font-bold mb-4">
          Grow your users. <br />
          <span className="text-6xl">Smarter.</span>
        </h1>
        <p className="text-lg mb-8">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-l-md border-none focus:ring-0"
          />
          <button
            type="submit"
            className="bg-purple-800 text-white px-6 py-3 rounded-r-md hover:bg-purple-900 transition"
          >
            Get started
          </button>
        </form>
        <p className="mt-4 text-sm">
          We care about your data in our{" "}
          <a href="#" className="underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Hero;
