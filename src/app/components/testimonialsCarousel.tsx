"use client";
import { useState } from "react";

const testimonials = [
  {
    name: "Alisa Hester",
    title: "PM, Hourglass",
    company: "Web Design Agency",
    image: "https://picsum.photos/id/1011/300/400",
    rating: 5,
  },
  {
    name: "Rich Wilson",
    title: "COO, Command+R",
    company: "Web Development Agency",
    image: "https://picsum.photos/id/1012/300/400",
    rating: 5,
  },
  {
    name: "Annie Stanley",
    title: "Designer, Catalog",
    company: "UX Agency",
    image: "https://picsum.photos/id/1013/300/400",
    rating: 5,
  },
  {
    name: "Johnny Walker",
    title: "PM, Sisyphus",
    company: "Machine Learning",
    image: "https://picsum.photos/id/1014/300/400",
    rating: 5,
  },
  {
    name: "Sophie Turner",
    title: "Designer, Quill",
    company: "Graphic Design",
    image: "https://picsum.photos/id/1015/300/400",
    rating: 4,
  },
];

const TestimonialCarousel = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollContainer = (direction: string) => {
    const container = document.getElementById("testimonial-container");
    const scrollAmount = 300;
    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
        setScrollPosition(container.scrollLeft - scrollAmount);
      } else {
        container.scrollLeft += scrollAmount;
        setScrollPosition(container.scrollLeft + scrollAmount);
      }
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Don’t just take our word for it
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Hear from some of our amazing customers who are automating their
          finances.
        </p>

        <div className="relative">
          <div
            id="testimonial-container"
            className="flex overflow-x-scroll scroll-smooth scrollbar-hide space-x-6"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-none w-80 relative rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 p-4">
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.334 4.107a1 1 0 00.95.69h4.252c.969 0 1.372 1.24.588 1.81l-3.44 2.499a1 1 0 00-.364 1.118l1.333 4.107c.3.921-.755 1.688-1.54 1.118l-3.44-2.498a1 1 0 00-1.176 0l-3.44 2.498c-.785.57-1.84-.197-1.54-1.118l1.333-4.107a1 1 0 00-.364-1.118l-3.44-2.499c-.784-.57-.38-1.81.588-1.81h4.252a1 1 0 00.95-.69L9.049 2.927z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xl font-bold text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-300">{testimonial.title}</p>
                  <p className="text-sm text-gray-300">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollContainer("left")}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={() => scrollContainer("right")}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full p-2 hover:bg-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
