/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Travel Page",
    description:
      "The travel page will give you all the information a place and is helpful for the tourism.",
    url: "https://github.com/muvanikamadavapeddi/travel-page.git",
  },
  {
    title: "Tribute Page",
    description:
      "The tribute page is dedicated to the person, it contains the information about the person we are dedicated.",
    url: "https://github.com/muvanikamadavapeddi/tribute.git",
  },
  {
    title: "My Resume Site",
    description:
      "This contains my details. This helps in making the recruiter to know about me and the skills I had.",
    url: "https://github.com/muvanikamadavapeddi/Resume.git",
  },
  {
    title: "Cold Drinks Store",
    description:
      "This web page is about to know the drinks available and I am currently working on it.",
    url: "https://github.com/muvanikamadavapeddi/drinks.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
