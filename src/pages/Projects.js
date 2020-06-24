import React from "react";
import _ from "lodash";
import TitleBar from "../components/TitleBar";
import doublePendulumRegular from "../assets/images/double-pendulum/headliner.png";
import doublePendulumHover from "../assets/images/double-pendulum/headliner_hover.png";
import reedSolomonRegular from "../assets/images/reed-solomon/headliner.png";
import reedSolomonHover from "../assets/images/reed-solomon/headliner_hover.png";
import { Carousel } from "react-bootstrap";
import "../assets/css/projects.css";

function Projects(props) {
  const projects = {
    doublePendulum: {
      path: "/double-pendulum",
      description: "Double Pendulum Learning Simulation",
      imagePath: "double-pendulum/headliner.png",
      srcName: "double-pendulum"
    },
    reedSolomon: {
      path: "/reed-solomon",
      description: "On the Construction of Reed-Solomon Codes",
      imagePath: "reed-solomon/headliner.png",
      srcName: "reed-solomon"
    }
  };

  const srcToImageMap = new Map();
  srcToImageMap.set("double-pendulum", doublePendulumRegular);
  srcToImageMap.set("reed-solomon", reedSolomonRegular);
  srcToImageMap.set("double-pendulum_hover", doublePendulumHover);
  srcToImageMap.set("reed-solomon_hover", reedSolomonHover);

  const getCurrentProjectView = () => {
    const el = document.querySelector(".carousel-item.active");
    if (el) {
      return el.getAttribute("project-name");
    }
  };

  const imgMouseEnter = e => {
    document.getElementById(
      getCurrentProjectView() + "-image"
    ).src = srcToImageMap.get(getCurrentProjectView() + "_hover");
  };

  const imgMouseOut = e => {
    document.getElementById(
      getCurrentProjectView() + "-image"
    ).src = srcToImageMap.get(getCurrentProjectView());
  };

  return (
    <div>
      <TitleBar title="projects" />
      <div
        className="carouselWrapper carouselImgWrapper"
        onMouseOver={imgMouseEnter}
        onMouseOut={imgMouseOut}
      >
        <Carousel indicators={true}>
          {_.map(projects, project => (
            <Carousel.Item
              project-name={project.srcName}
              key={project.srcName}
              href={project.path}
            >
              <a href={project.path}>
                <img
                  className="d-block w-100"
                  id={`${project.srcName}-image`}
                  src={srcToImageMap.get(project.srcName)}
                  alt={`Project "${project.srcName}"`}
                />
                <Carousel.Caption>
                  <h5 className="description">{project.description}</h5>
                </Carousel.Caption>
              </a>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;
