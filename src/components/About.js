import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      icon: '🏠',
      title: 'Servicio a Domicilio',
      description: 'Nos desplazamos hasta tu hogar con todo el equipo profesional necesario.'
    },
    {
      icon: '⭐',
      title: 'Experiencia Profesional',
      description: 'Más de 3 años de experiencia cuidando y embelleciendo a las mascotas.'
    },
    {
      icon: '💝',
      title: 'Trato Personalizado',
      description: 'Cada mascota es única y merece un cuidado especial y personalizado.'
    },
    {
      icon: '🛡️',
      title: 'Productos de Calidad',
      description: 'Utilizamos solo productos profesionales y seguros para tu mascota.'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre Nosotros</h2>
            <p className="about-intro">
              Somos especialistas en peluquería canina a domicilio, dedicados a brindar 
              el mejor cuidado para tu mascota en la comodidad de tu hogar.
            </p>
            <p>
              <strong>Martino Galarza Vazquez</strong> es un profesional apasionado por el cuidado 
              canino, con años de experiencia en el sector. Nuestro objetivo es que tu mascota 
              se sienta cómoda y relajada durante todo el proceso, eliminando el estrés de 
              transportarla a una peluquería tradicional.
            </p>
            <p>
              Creemos que cada mascota merece un trato especial y personalizado. Por eso, 
              nos tomamos el tiempo necesario para conocer a tu compañero peludo y ofrecerle 
              exactamente lo que necesita.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>Mascotas atendidas</p>
              </div>
              <div className="stat-item">
                <h3>3+</h3>
                <p>Años de experiencia</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Clientes satisfechos</p>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="visual-container">
              <div className="profile-card">
                <div className="profile-avatar">
                  <span>👨‍💼</span>
                </div>
                <h3>Martino Galarza Vazquez</h3>
                <p>Peluquero Canino Profesional</p>
                <div className="profile-badges">
                  <span className="badge">Certificado</span>
                  <span className="badge">Experiencia</span>
                  <span className="badge">Pasión</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card">
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mission-statement">
          <div className="mission-content">
            <h3>Nuestra Misión</h3>
            <p>
              "Brindar servicios de peluquería canina de la más alta calidad en la comodidad 
              del hogar, garantizando el bienestar y la felicidad de cada mascota que atendemos. 
              Nos comprometemos a ofrecer un trato profesional, cariñoso y personalizado."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
