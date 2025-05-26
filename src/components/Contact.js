import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    petName: '',
    petBreed: '',
    service: '',
    address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Crear mensaje para WhatsApp
    const whatsappMessage = `
Hola! Me gustaría agendar una cita:

👤 *Datos del dueño:*
• Nombre: ${formData.name}
• Teléfono: ${formData.phone}
• Email: ${formData.email}

🐕 *Datos de la mascota:*
• Nombre: ${formData.petName}
• Raza: ${formData.petBreed}

🏠 *Dirección:* ${formData.address}

✂️ *Servicio solicitado:* ${formData.service}

💬 *Mensaje adicional:* ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/5491132847620?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    'Corte Profesional',
    'Baño Completo',
    'Cuidado de Uñas',
    'Limpieza de Oídos',
    'Paquete Completo'
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2>Contáctanos</h2>
          <p>Agenda tu cita y dale a tu mascota el cuidado que se merece</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Información de Contacto</h3>
              <div className="contact-item">
                <span className="icon">📱</span>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+54 9 11 3284-7620</p>
                  <a href="https://wa.me/5491132847620" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
                    Enviar mensaje
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>martinogalarza@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">🏠</span>
                <div>
                  <h4>Zona de Cobertura</h4>
                  <p>Capital Federal y Gran Buenos Aires</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="icon">⏰</span>
                <div>
                  <h4>Horarios</h4>
                  <p>Lunes a Sábado: 9:00 - 18:00</p>
                  <p>Domingos: 10:00 - 16:00</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h4>Síguenos en Redes</h4>
              <div className="social-buttons">
                <a href="https://instagram.com/cortecaninodomicilio" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
                  📷 Instagram
                </a>
                <a href="https://facebook.com/cortecaninodomicilio" target="_blank" rel="noopener noreferrer" className="social-btn facebook">
                  📘 Facebook
                </a>
                <a href="https://wa.me/5491132847620" target="_blank" rel="noopener noreferrer" className="social-btn whatsapp">
                  💬 WhatsApp
                </a>
              </div>
            </div>
            
            <div className="emergency-contact">
              <h4>🚨 Urgencias</h4>
              <p>Para casos de emergencia o citas urgentes, contáctanos directamente por WhatsApp</p>
              <a href="https://wa.me/5491132847620?text=Hola! Necesito una cita urgente" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Contacto Urgente
              </a>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Solicitar Cita</h3>
              
              <div className="form-section">
                <h4>Datos del Dueño</h4>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Tu teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Tu email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-section">
                <h4>Datos de la Mascota</h4>
                <div className="form-row">
                  <input
                    type="text"
                    name="petName"
                    placeholder="Nombre de la mascota"
                    value={formData.petName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="petBreed"
                    placeholder="Raza"
                    value={formData.petBreed}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-section">
                <h4>Servicio y Ubicación</h4>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
                
                <textarea
                  name="address"
                  placeholder="Dirección completa (calle, número, piso, depto, barrio)"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  required
                />
              </div>
              
              <textarea
                name="message"
                placeholder="Mensaje adicional (horario preferido, observaciones especiales, etc.)"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              />
              
              <button type="submit" className="btn btn-primary submit-btn">
                📱 Enviar por WhatsApp
              </button>
              
              <div className="form-note">
                <p>
                  <strong>Nota:</strong> Al enviar el formulario se abrirá WhatsApp con tu mensaje pre-llenado. 
                  También puedes contactarnos directamente al +54 9 11 3284-7620
                </p>
              </div>
            </form>
          </div>
        </div>
        
        <div className="contact-features">
          <div className="feature">
            <span className="feature-icon">🚗</span>
            <h4>Nos desplazamos a tu hogar</h4>
            <p>Servicio completamente a domicilio</p>
          </div>
          <div className="feature">
            <span className="feature-icon">⏱️</span>
            <h4>Citas flexibles</h4>
            <p>Horarios adaptados a tu rutina</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💳</span>
            <h4>Múltiples formas de pago</h4>
            <p>Efectivo, transferencia, Mercado Pago</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🔒</span>
            <h4>Servicio seguro</h4>
            <p>Protocolos de higiene y seguridad</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;