"use client";
import { useState } from "react";

const faqData = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. If you cancel before the end of your billing period, you'll still have access to your account for the remainder of that period.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add additional information to your invoices, such as a purchase order number or a company name.",
  },
  {
    question: "How does billing work?",
    answer:
      "We offer monthly and annual billing options. You'll be charged automatically at the start of each billing period.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change your account email from your account settings. We'll send a confirmation email to your new address to verify the change.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Frequently asked questions
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Everything you need to know about the product and billing.
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left text-lg text-gray-700 font-medium"
              >
                {faq.question}
                <span>
                  {activeIndex === index ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className="pb-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
