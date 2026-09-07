// Services.jsx
import React from 'react';
import {
  FaFileInvoice,
  FaClipboardList,
  FaCalculator,
  FaHandshake,
  FaChartBar,
  FaGlobe,
  FaArrowRight
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: FaFileInvoice,
      title: 'Customs Documentation',
      description: 'Preparation and processing of all customs documentation including import/export declarations, invoices, and permits.',
      label: 'Documentation'
    },
    {
      icon: FaClipboardList,
      title: 'HS Code Classification',
      description: 'Accurate classification of goods using the Harmonized System (HS) codes for proper duty assessment.',
      label: 'Classification'
    },
    {
      icon: FaCalculator,
      title: 'Customs Valuation & Duty',
      description: 'Determination of customs value and calculation of applicable duties, taxes, and fees for imported goods.',
      label: 'Valuation'
    },
    {
      icon: FaHandshake,
      title: 'Stakeholder Coordination',
      description: 'Liaising with customs authorities, importers, exporters, and logistics providers for smooth clearance.',
      label: 'Coordination'
    },
    {
      icon: FaChartBar,
      title: 'Compliance & Risk Assessment',
      description: 'Ensuring compliance with customs regulations and identifying potential compliance risks.',
      label: 'Compliance'
    },
    {
      icon: FaGlobe,
      title: 'Import/Export Consultation',
      description: 'Providing expert advice on import/export procedures, trade agreements, and customs requirements.',
      label: 'Consultation'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-pattern" aria-hidden="true" />

      <div className="container services-container">
        <header className="services-header">
          <div className="services-eyebrow">
            <span className="services-eyebrow-line" />
            What I offer
          </div>

          <h2 className="services-title">
            Clearance services,
            <span> end to end</span>
          </h2>

          <p className="services-lead">
            From classification to coordination — support that keeps shipments moving
            without compliance surprises.
          </p>
        </header>

        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            const number = String(index + 1).padStart(2, '0');
            return (
              <article
                className="services-card-panel service-card"
                key={service.title}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="service-card-top">
                  <div>
                    <span className="service-kicker">{service.label}</span>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <span className="service-number-mark">{number}</span>
                </div>

                <p className="service-description">{service.description}</p>

                <div className="service-footer">
                  <span className="service-tag">Learn more</span>
                  <FaArrowRight className="service-arrow" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;