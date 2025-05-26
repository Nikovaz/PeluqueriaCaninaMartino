import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Peluquería Canina <span className="highlight">a Domicilio</span></h1>
            <p className="hero-description">
              Servicio profesional de corte y cuidado canino en la comodidad de tu hogar. 
              Tu mascota merece el mejor cuidado sin el estrés de salir de casa.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <h3>500+</h3>
                <p>Mascotas Felices</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Años de Experiencia</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Satisfacción</p>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Agendar Cita
              </button>
              <button className="btn btn-secondary" onClick={scrollToServices}>
                Ver Servicios
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-placeholder">
              <div className="dog-silhouette">
                <div className="paw paw-1">🐾</div>
                <div className="paw paw-2">🐾</div>
                <div className="paw paw-3">🐾</div>
                <div className="paw paw-4">🐾</div>
                <div className="dog-icon">🐕</div>
                <div className="scissors">✂️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
