// src/components/FAQ.jsx
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import './FAQ.css';

const FAQ = ({ isPage = false }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is customs clearance and why is it important?',
      answer: 'Customs clearance is the official process of getting goods through customs so they can enter or leave a country. It involves submitting required documentation, paying applicable duties and taxes, and ensuring compliance with all regulations. Proper customs clearance is crucial to avoid delays, penalties, and legal issues that could disrupt your supply chain.'
    },
    {
      question: 'What documents are needed for customs clearance?',
      answer: 'The required documents typically include: Commercial Invoice, Packing List, Bill of Lading/Air Waybill, Import/Export Declaration, Certificate of Origin, and any specific permits or licenses required for your goods. As your customs agent, I can help you prepare and verify all documentation to ensure smooth clearance.'
    },
    {
      question: 'How long does the customs clearance process take?',
      answer: 'The clearance process typically takes 1-3 business days, depending on factors such as: the type and value of goods, completeness of documentation, customs inspection requirements, and current workload at the customs office. I work to expedite the process while ensuring full compliance.'
    },
    {
      question: 'What is HS code classification and why does it matter?',
      answer: 'HS (Harmonized System) codes are internationally standardized numerical codes used to classify traded products. Accurate HS code classification is essential because it determines: applicable duty rates, import restrictions, licensing requirements, and statistical reporting. Incorrect classification can lead to overpayment of duties or customs penalties.'
    },
    {
      question: 'What services do you offer as a customs agent?',
      answer: 'I offer comprehensive customs clearance services including: HS code classification, customs valuation, duty and tax assessment, import/export documentation preparation, regulatory compliance advice, coordination with customs authorities, and consultation on trade agreements. I\'m licensed by the Department of Customs and based at Bhairahawa Customs Office.'
    },
    {
      question: 'How much do your customs clearance services cost?',
      answer: 'My fees are competitive and depend on the complexity of the shipment, type of goods, and scope of services required. I provide transparent pricing with no hidden charges. Contact me with your specific requirements for a personalized quote.'
    },
    {
      question: 'What is customs valuation and how is it determined?',
      answer: 'Customs valuation is the process of determining the value of imported goods for customs purposes. This value is used to calculate applicable duties and taxes. The value is typically based on the transaction value (the price actually paid or payable for the goods), with adjustments for certain costs like freight and insurance.'
    },
    {
      question: 'Do you handle both imports and exports?',
      answer: 'Yes, I handle both import and export customs clearance. I can assist with: import documentation and clearance for bringing goods into Nepal, export documentation and clearance for shipping goods out of Nepal, and advice on trade agreements and export incentives.'
    },
    {
      question: 'What types of goods can you clear through customs?',
      answer: 'I can handle a wide range of goods including: commercial merchandise, raw materials, machinery and equipment, consumer goods, agricultural products, and industrial supplies. If you have specific goods in question, contact me to discuss your requirements.'
    },
    {
      question: 'How do I get started with your customs clearance services?',
      answer: 'Getting started is simple: 1) Contact me via phone, email, or WhatsApp, 2) Provide details about your shipment (type of goods, origin/destination, value), 3) Share relevant documentation, 4) I\'ll handle the customs clearance process and keep you updated throughout.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`faq ${isPage ? 'faq-page' : 'faq-home'}`}>
      {!isPage && <div className="faq-pattern" aria-hidden="true" />}
      
      <div className="container faq-container">
        {!isPage && (
          <header className="faq-header">
            <div className="faq-eyebrow">
              <span className="faq-eyebrow-line" />
              Got Questions?
            </div>
            <h2 className="faq-title">
              Frequently Asked
              <span> Questions</span>
            </h2>
            <p className="faq-lead">
              Quick answers to common questions about customs clearance and import/export procedures.
            </p>
          </header>
        )}

        {isPage && (
          <header className="faq-header">
            <div className="faq-eyebrow">
              <span className="faq-eyebrow-line" />
              Got Questions?
            </div>
            <h2 className="faq-title">
              Frequently Asked
              <span> Questions</span>
            </h2>
            <p className="faq-lead">
              Quick answers to common questions about customs clearance and import/export procedures.
            </p>
          </header>
        )}

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'active' : ''}`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!isPage && (
          <div className="faq-footer">
            <p>Still have questions? <a href="/contact">Contact me</a> for personalized assistance.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;