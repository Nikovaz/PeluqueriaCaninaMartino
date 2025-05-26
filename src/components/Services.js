import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '✂️',
      title: 'Corte Profesional',
      description: 'Corte personalizado según la raza y preferencias del dueño. Utilizamos técnicas profesionales para el mejor resultado.',
      price: 'Desde $800',
      features: ['Corte según raza', 'Peinado profesional', 'Acabado perfecto']
    },
    {
      icon: '🛁',
      title: 'Baño Completo',
      description: 'Baño con productos especializados, secado y cepillado. Tu mascota quedará limpia y con un aroma increíble.',
      price: 'Desde $600',
      features: ['Shampoo especializado', 'Secado profesional', 'Cepillado completo']
    },
    {
      icon: '💅',
      title: 'Cuidado de Uñas',
      description: 'Corte y limado de uñas profesional. Mantenemos las uñas de tu mascota en perfecto estado.',
      price: 'Desde $300',
      features: ['Corte preciso', 'Limado suave', 'Revisión de almohadillas']
    },
    {
      icon: '👂',
      title: 'Limpieza de Oídos',
      description: 'Limpieza profunda y cuidadosa de los oídos para prevenir infecciones y mantener la higiene.',
      price: 'Desde $250',
      features: ['Limpieza profunda', 'Productos seguros', 'Revisión preventiva']
    },
    {
      icon: '🎨',
      title: 'Paquete Completo',
      description: 'Todos nuestros servicios incluidos en un paquete especial. La opción más completa para tu mascota.',
      price: 'Desde $1,500',
      features: ['Todos los servicios', 'Descuento especial', 'Atención premium']
    },
    {
      icon: '🏠',
      title: 'Servicio a Domicilio',
      description: 'Nos desplazamos hasta tu hogar con todo el equipo necesario. Comodidad total para ti y tu mascota.',
      price: 'Sin costo extra',
      features: ['Equipo completo', 'Sin estrés', 'Máxima comodidad']
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2>Nuestros Servicios</h2>
          <p>Ofrecemos una gama completa de servicios de peluquería canina profesional</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-price">{service.price}</div>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
              <button className="btn btn-secondary service-btn">
                Más Información
              </button>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <div className="cta-content">
            <h3>¿Necesitas un servicio personalizado?</h3>
            <p>Contáctanos y creamos un paquete especial para tu mascota</p>
            <button className="btn btn-primary">Contactar Ahora</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
