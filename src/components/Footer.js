import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>🐕 Corte Canino Martino</h3>
              <p>Peluquería canina profesional a domicilio</p>
            </div>
            <div className="footer-contact">
              <p>📱 +54 9 11 3284-7620</p>
              <p>📧 martinogalarza@gmail.com</p>
              <p>🏠 Capital Federal y Gran Buenos Aires</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Servicios</h4>
            <ul>
              <li>Corte Profesional</li>
              <li>Baño Completo</li>
              <li>Cuidado de Uñas</li>
              <li>Limpieza de Oídos</li>
              <li>Paquetes Especiales</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Navegación</h4>
            <ul>
              <li><button onClick={() => scrollToSection('hero')}>Inicio</button></li>
              <li><button onClick={() => scrollToSection('services')}>Servicios</button></li>
              <li><button onClick={() => scrollToSection('about')}>Nosotros</button></li>
              <li><button onClick={() => scrollToSection('contact')}>Contacto</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="https://wa.me/5491132847620" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                💬 WhatsApp
              </a>
              <a href="https://instagram.com/cortecaninodomicilio" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                📷 Instagram
              </a>
              <a href="https://facebook.com/cortecaninodomicilio" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                📘 Facebook
              </a>
            </div>
            
            <div className="footer-cta">
              <h5>¿Listo para agendar?</h5>
              <a href="https://wa.me/5491132847620?text=Hola! Me gustaría agendar una cita" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Contactar Ahora
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-features">
          <div className="feature-item">
            <span>🏠</span>
            <span>Servicio a Domicilio</span>
          </div>
          <div className="feature-item">
            <span>⭐</span>
            <span>Calidad Profesional</span>
          </div>
          <div className="feature-item">
            <span>💝</span>
            <span>Trato Personalizado</span>
          </div>
          <div className="feature-item">
            <span>🛡️</span>
            <span>Productos Seguros</span>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Corte Canino Martino. Todos los derechos reservados.</p>
            <p>Desarrollado con ❤️ para el cuidado de tu mascota</p>
          </div>
          <button className="scroll-to-top" onClick={scrollToTop}>
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;