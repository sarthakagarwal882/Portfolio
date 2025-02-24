import React, { useState } from "react";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faq = [
    {
      id: 1,
      que: "How can I contact you?",
      ans: "You can reach me through the contact form on this website or via email at work.sarthak882@gmail.com",
    },
    {
      id: 2,
      que: "Can I hire you for a project?",
      ans: "Yes, I'm available for freelance work and collaborations. Please get in touch with me to discuss your project requirements.",
    },
    {
      id: 3,
      que: "Are you available for remote work?",
      ans: "Yes, I can work remotely and collaborate with clients from anywhere in the world.",
    },
  ];

  return (
    <div className="bg-backgroundColor px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-24 md:py-32 lg:py-40">
      <h1 className="font-bold text-textWhiteColor text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
        FAQ
      </h1>
      <p className="text-center text-textWhiteColor pt-2 text-sm sm:text-base">
        Explore my portfolio, learn about my skills, and get answers to
        frequently asked questions about my work, collaborations, and more
      </p>

      <div className="mt-16 space-y-4">
        {faq.map((item, index) => (
          <div
            key={item.id}
            className="border-[1px] border-textWhiteColor rounded-xl"
          >
            <h2>
              <button
                className={`w-full text-left px-4 py-4 text-lg sm:text-xl text-textWhiteColor font-semibold ${
                  activeIndex === index ? "rounded-t-lg" : "rounded-lg"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                {item.que}
              </button>
            </h2>
            {activeIndex === index && (
              <div className="px-4 py-4 text-base sm:text-lg text-textWhiteColor">
                {" "}
                • {item.ans}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;