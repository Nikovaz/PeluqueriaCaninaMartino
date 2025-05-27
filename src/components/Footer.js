import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>🐶 Corte Canino Martino</h3>
              <p>🐾 Peluquería canina profesional a domicilio</p>
            </div>
            <div className="footer-contact">
              <p>📞 +54 9 11 5758-2529</p>
              <p>📧 martinogalarza@gmail.com</p>
              <p>📍 Capital Federal y Gran Buenos Aires</p>
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
            <h4>Síguenos</h4>
            <div className="social-links">
              <a href="https://wa.me/5491157582529" target="_blank" rel="noopener noreferrer" className="social-link whatsapp">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
              <a href="https://instagram.com/cortecaninodomicilio" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://facebook.com/cortecaninodomicilio" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
            
            <div className="footer-cta">
              <h5>¿Listo para agendar?</h5>
              <a href="https://wa.me/5491157582529?text=Hola! Me gustaría agendar una cita" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
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
            <p>Desarrollado por <a href="https://github.com/nikoVaz" target="_blank" rel="noopener noreferrer">nikoVaz</a></p>
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