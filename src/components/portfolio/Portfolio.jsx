import "./portfolio.css";

import IMG1 from "../../assets/General Store Management System.png";
import IMG2 from "../../assets/Calculator.png";
import IMG3 from "../../assets/Namaste Chef.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "General Store Management System",
      img: IMG1,
      description:
        "A Java based management system to keep record of new stock added, purchased, sold and visualized through table",
      technologies: "Java Swing | JDBC | MySQL",
      github: "https://github.com/ameykulkarni27/General-Store-Management-System",
    },
    {
      id: 2,
      title: "Calculator with Unit Convertors",
      img: IMG2,
      description:
        "It is a Java Program with Simple Calculator along with 9 different unit convertors like Length, Currency, Area, Volume, Power, Pressure, Speed, Temperature and Weight",
      technologies: "Java Swing",
      github: "https://github.com/ameykulkarni27/Calculator-with-Unit-Convertors-",
    },
    {
      id: 3,
      title: "Namaste Chef",
      img: IMG3,
      description: "A Website where you can get authentic recipes from 6 different states across India like Maharashtra, Gujarat, Karnataka, Punjab, Tamil Nadu, Goa.",
      technologies: "HTML | CSS",
      github: "https://github.com/ameykulkarni27/Namaste-Chef",
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
