const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto rounded-lg shadow-lg overflow-hidden flex bg-purple-600">
        <div className="w-1/3">
          <img
            src="/images/testimonial.png"
            alt="Testimonial"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3 p-10 text-white flex flex-col justify-center">
          <div className="mb-4">
            <div className="flex">
              {/* Star ratings */}
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.334 4.107a1 1 0 00.95.69h4.252c.969 0 1.372 1.24.588 1.81l-3.44 2.499a1 1 0 00-.364 1.118l1.333 4.107c.3.921-.755 1.688-1.54 1.118l-3.44-2.498a1 1 0 00-1.176 0l-3.44 2.498c-.785.57-1.84-.197-1.54-1.118l1.333-4.107a1 1 0 00-.364-1.118l-3.44-2.499c-.784-.57-.38-1.81.588-1.81h4.252a1 1 0 00.95-.69L9.049 2.927z" />
                </svg>
              ))}
            </div>
          </div>
          <blockquote className="text-xl font-medium mb-4">
            “Love the simplicity of the service and the prompt customer support.
            We can’t imagine working without it.”
          </blockquote>
          <footer className="text-sm">
            — Renee Wells,{" "}
            <span className="italic">Product Designer, Quotient</span>
          </footer>
          <div className="mt-6 flex space-x-2">
            <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-purple-400 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-purple-400 rounded-full"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
