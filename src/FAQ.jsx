import React from "react";
import './FAQ.css'
const FAQ = () => {
  const faqs = [
    {
      question: "What styles of dance do you offer?",
      answer: "We offer a variety of dance styles, including Bharatanatyam, Western Dance, Salsa, Flamenco, Kathakali, Hip-Hop, Ballet, Contemporary, and more.",
    },
    {
      question: "Do you offer trial classes?",
      answer: "Yes! We offer a free trial class for new students so they can experience our teaching style before enrolling.",
    },
    {
      question: "What are the age requirements for your classes?",
      answer: "We have classes for all age groups, from kids (3+ years) to adults.",
    },
    {
      question: "How do I register for a class?",
      answer: "You can register online through our website or visit our studio in person.",
    },
    {
      question: "What should I wear to dance class?",
      answer: "Comfortable dance attire is recommended. Some styles, like Ballet and Bharatanatyam, may have specific dress codes.",
    },
    {
      question: "How much do classes cost?",
      answer: "Our pricing varies depending on the dance style and class duration. Please check our website or contact us for details.",
    },
    {
      question: "Do you offer discounts for multiple classes or siblings?",
      answer: "Yes! We offer discounts for students taking multiple classes and for siblings enrolling together.",
    },
    {
      question: "What happens if I miss a class?",
      answer: "We offer makeup classes within the same month if you inform us in advance.",
    },
    {
      question: "Can I cancel my membership?",
      answer: "Yes, but we require a notice period. Please refer to our cancellation policy for details.",
    },
    {
      question: "Do you organize performances or competitions?",
      answer: "Yes! We conduct annual recitals, stage performances, and encourage participation in dance competitions.",
    },
    {
      question: "Will I receive a certificate after completing a course?",
      answer: "Yes! We provide certificates for students who successfully complete our dance courses.",
    },
    {
      question: "Do you offer private dance lessons?",
      answer: "Yes, we offer one-on-one private lessons for those who prefer personalized coaching.",
    },
    {
      question: "Can parents watch the classes?",
      answer: "To ensure students stay focused, we have designated observation days for parents.",
    },
    {
      question: "Do you offer wedding or event choreography?",
      answer: "Yes! We provide customized choreography for weddings, corporate events, and special occasions.",
    },
    {
      question: "How can I contact the dance school for more details?",
      answer: "You can reach us via phone, email, or visit our studio during working hours.",
    },
  ];

  return (
    <div className="container5  p-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index} id="qp">
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
